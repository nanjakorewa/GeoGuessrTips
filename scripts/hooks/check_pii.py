#!/usr/bin/env python3
"""Pre-commit PII / secrets scanner.

Reads staged changes via `git diff --cached -U0` and checks added lines for:
  * BLOCK level — API tokens, private keys, credit-card numbers (Luhn-validated),
    secret-looking filenames (.env, id_rsa, *.pem, etc).
  * WARN  level — email addresses, JP phone numbers, JP postal codes, JP myNumber.

Exit codes
  0  All clear (or warnings only).
  1  Block-level finding(s); commit aborted.

Allowlist
  A line in `.piiallowlist` (regex) suppresses a finding if the matched substring
  matches the allowlist entry. Useful for documentation examples
  (e.g. example@example.com).

This file is intentionally Python (not Bash) so the regex set, Luhn check, and
allowlist logic stay readable and portable across platforms.
"""
from __future__ import annotations

import os
import re
import subprocess
import sys
from pathlib import Path
from typing import Iterable


# --- Pattern definitions --------------------------------------------------- #

class Pattern:
    """Lightweight (non-dataclass) container so the file is importable both as
    a script and via importlib.util in tests on older Python builds."""

    __slots__ = ("name", "regex", "severity", "description")

    def __init__(self, name: str, regex: re.Pattern, severity: str, description: str) -> None:
        self.name = name
        self.regex = regex
        self.severity = severity
        self.description = description

# Block-level secret patterns. Keep these tight to minimise false positives.
BLOCK_PATTERNS: list[Pattern] = [
    Pattern(
        "AWS Access Key ID",
        re.compile(r"\b(?:AKIA|ASIA)[0-9A-Z]{16}\b"),
        "block",
        "AWS access key (AKIA / ASIA prefix + 16 chars)",
    ),
    Pattern(
        "AWS Secret Access Key (assignment)",
        re.compile(
            r"(?i)aws[_\-]?secret[_\-]?access[_\-]?key"
            r"\s*[:=]\s*['\"]?[A-Za-z0-9/+=]{40}['\"]?"
        ),
        "block",
        "Variable assignment of AWS secret access key",
    ),
    Pattern(
        "GitHub token",
        re.compile(r"\b(?:gh[pousr])_[A-Za-z0-9]{36,}\b"),
        "block",
        "GitHub PAT / OAuth / user / server token (ghp_, gho_, ghu_, ghs_, ghr_)",
    ),
    Pattern(
        "Slack token",
        re.compile(r"\bxox[abprs]-[A-Za-z0-9-]{10,}\b"),
        "block",
        "Slack bot/user/app token",
    ),
    Pattern(
        "Google API key",
        re.compile(r"\bAIza[0-9A-Za-z_\-]{35}\b"),
        "block",
        "Google API key",
    ),
    Pattern(
        "Stripe live key",
        re.compile(r"\b(?:sk|rk)_live_[0-9A-Za-z]{20,}\b"),
        "block",
        "Stripe live secret / restricted key",
    ),
    Pattern(
        "Private key (PEM)",
        re.compile(r"-----BEGIN (?:RSA |DSA |EC |OPENSSH |PGP |ENCRYPTED )?PRIVATE KEY-----"),
        "block",
        "PEM-encoded private key",
    ),
    Pattern(
        "JWT (signed)",
        # Three base64url-segments separated by dots, with eyJ header prefix
        re.compile(r"\beyJ[A-Za-z0-9_\-]{10,}\.eyJ[A-Za-z0-9_\-]{10,}\.[A-Za-z0-9_\-]{10,}\b"),
        "block",
        "Possible signed JWT",
    ),
]

# Warn-level patterns. Logged but do NOT abort the commit.
WARN_PATTERNS: list[Pattern] = [
    Pattern(
        "Email address",
        re.compile(r"\b[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}\b"),
        "warn",
        "Email address — confirm it is intended (allowlist via .piiallowlist)",
    ),
    Pattern(
        "JP phone number",
        # 0X-XXXX-XXXX / 0XX-XXX-XXXX / 0XXX-XX-XXXX / 0XXXX-X-XXXX  (with - or space)
        re.compile(r"(?<!\d)0\d{1,4}[\-\s]\d{1,4}[\-\s]\d{3,4}(?!\d)"),
        "warn",
        "Japanese phone number pattern",
    ),
    Pattern(
        "JP postal code",
        re.compile(r"(?<!\d)〒?\d{3}-\d{4}(?!\d)"),
        "warn",
        "Japanese postal code (XXX-XXXX) — usually OK if it's a public address",
    ),
    Pattern(
        "JP myNumber (12-digit)",
        # 12 contiguous digits surrounded by non-digits.  Loose; expect false positives.
        re.compile(r"(?<!\d)\d{12}(?!\d)"),
        "warn",
        "Possible 12-digit myNumber — review carefully",
    ),
]

# Filenames that are almost always secrets — block by name regardless of content.
SECRET_FILENAME_PATTERNS: list[re.Pattern] = [
    re.compile(r"(^|/)\.env(\..*)?$"),
    re.compile(r"(^|/)id_(rsa|dsa|ecdsa|ed25519)(\.pub)?$"),
    re.compile(r"\.pem$"),
    re.compile(r"\.key$"),
    re.compile(r"\.p12$"),
    re.compile(r"\.pfx$"),
    re.compile(r"\.json$"),
    re.compile(r"(^|/)credentials\.json$"),
    re.compile(r"(^|/)secrets\.(yml|yaml|toml|ini)$"),
    re.compile(r"(^|/)\.aws/credentials$"),
    re.compile(r"(^|/)\.netrc$"),
]
# id_rsa.pub etc. ARE public — but we err on the side of caution.

# --- Helpers -------------------------------------------------------------- #


def run(cmd: list[str]) -> str:
    return subprocess.check_output(cmd, encoding="utf-8", errors="replace")


def git_root() -> Path:
    return Path(run(["git", "rev-parse", "--show-toplevel"]).strip())


def staged_files() -> list[str]:
    out = run(["git", "diff", "--cached", "--name-only", "--diff-filter=ACMR"])
    return [line for line in out.splitlines() if line.strip()]


def staged_added_lines() -> Iterable[tuple[str, int, str]]:
    """Yield (file, line_no_in_added_diff, line_text) for each '+' line in the staged diff."""
    diff = run(["git", "diff", "--cached", "--diff-filter=ACMR", "-U0"])
    cur_file = None
    cur_line = 0
    for raw in diff.split("\n"):
        if raw.startswith("+++ "):
            path = raw[4:].strip()
            if path.startswith("b/"):
                path = path[2:]
            cur_file = path
            continue
        if raw.startswith("--- ") or raw.startswith("diff --git"):
            continue
        if raw.startswith("@@"):
            # @@ -old,n +new,m @@
            m = re.match(r"@@ -\d+(?:,\d+)? \+(\d+)(?:,\d+)? @@", raw)
            if m:
                cur_line = int(m.group(1)) - 1
            continue
        if raw.startswith("+") and not raw.startswith("+++"):
            cur_line += 1
            yield cur_file, cur_line, raw[1:]
        elif raw.startswith(" "):
            cur_line += 1


def load_allowlist(root: Path) -> list[re.Pattern]:
    f = root / ".piiallowlist"
    if not f.exists():
        return []
    out: list[re.Pattern] = []
    for line in f.read_text(encoding="utf-8").splitlines():
        s = line.strip()
        if not s or s.startswith("#"):
            continue
        try:
            out.append(re.compile(s))
        except re.error:
            print(f"[check_pii] Skipping invalid allowlist regex: {s}", file=sys.stderr)
    return out


def luhn_ok(num: str) -> bool:
    digits = [int(c) for c in num if c.isdigit()]
    if not digits:
        return False
    s = 0
    parity = len(digits) % 2
    for i, d in enumerate(digits):
        if i % 2 == parity:
            d *= 2
            if d > 9:
                d -= 9
        s += d
    return s % 10 == 0


# Credit-card detection: 13–19 contiguous digits (with optional - or space separators)
# We require the pure-digit version to pass Luhn to count as a hit.
CC_RE = re.compile(r"(?<!\d)(?:\d[ \-]?){12,18}\d(?!\d)")


# --- Main ----------------------------------------------------------------- #


def main() -> int:
    root = git_root()
    os.chdir(root)

    allowlist = load_allowlist(root)
    findings_block: list[str] = []
    findings_warn: list[str] = []

    def is_allowed(text: str) -> bool:
        return any(p.search(text) for p in allowlist)

    # 1. Filename-based secret-file checks
    for fn in staged_files():
        if any(p.search(fn) for p in SECRET_FILENAME_PATTERNS):
            if not is_allowed(fn):
                findings_block.append(f"  [secret-file]  {fn}")

    # 2. Content-based regex checks
    for fn, lineno, line in staged_added_lines():
        # Skip allowlisted files entirely (allowlist matches on file path)
        if is_allowed(fn):
            continue

        # Block-level patterns
        for pat in BLOCK_PATTERNS:
            for m in pat.regex.finditer(line):
                if is_allowed(m.group(0)):
                    continue
                snippet = m.group(0)
                if len(snippet) > 60:
                    snippet = snippet[:57] + "..."
                findings_block.append(f"  [{pat.name}]  {fn}:{lineno}  {snippet}")

        # Credit card with Luhn check
        for m in CC_RE.finditer(line):
            num = re.sub(r"[ \-]", "", m.group(0))
            if 13 <= len(num) <= 19 and luhn_ok(num):
                if is_allowed(m.group(0)):
                    continue
                if fn.endswith("topojson"):
                    continue
                masked = num[:6] + "..." + num[-4:]
                findings_block.append(
                    f"  [credit-card (Luhn-valid)]  {fn}:{lineno}  {masked}"
                )

        # Warn patterns
        for pat in WARN_PATTERNS:
            for m in pat.regex.finditer(line):
                if is_allowed(m.group(0)):
                    continue
                snippet = m.group(0)
                if len(snippet) > 60:
                    snippet = snippet[:57] + "..."
                findings_warn.append(f"  [{pat.name}]  {fn}:{lineno}  {snippet}")

    # --- Report ---
    if findings_warn:
        print("\n[check_pii] WARNINGS (review but not blocked):")
        for f in findings_warn[:50]:
            print(f)
        if len(findings_warn) > 50:
            print(f"  ... ({len(findings_warn) - 50} more)")

    if findings_block:
        print("\n[check_pii] !! BLOCKING findings commit aborted !!")
        for f in findings_block:
            print(f)
        print(
            "\nIf this is a deliberate, safe value (e.g., a documentation example),\n"
            "add a regex to .piiallowlist or remove the offending content."
        )
        return 1

    return 0


if __name__ == "__main__":
    sys.exit(main())
