#!/bin/bash
# Install Git hooks for this repository.
#
# Sets `core.hooksPath` to scripts/hooks so every cloned copy gets the same
# pre-commit checks (PII / secret scan, NULL-byte stripper, NG-word filter).
# Run once after `git clone`:
#
#   bash scripts/hooks/install.sh
#
set -euo pipefail

ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"

git config core.hooksPath scripts/hooks

# Ensure scripts are executable on POSIX systems.
chmod +x scripts/hooks/pre-commit 2>/dev/null || true
chmod +x scripts/hooks/install.sh 2>/dev/null || true

echo "Installed Git hooks (core.hooksPath = scripts/hooks)."
echo
echo "What's protected:"
echo "  * Stray NULL bytes in text files are auto-stripped."
echo "  * Commits containing API keys / private keys / Luhn-valid credit cards"
echo "    / known secret filenames are blocked."
echo "  * Commits containing emails / phone / postal numbers print a warning"
echo "    so you can confirm they are intentional."
echo "  * Existing .ngwords filter remains active."
echo
echo "If you ever need to override the hook in an emergency:"
echo "    git commit --no-verify"
echo
echo "Add false-positive suppressions to .piiallowlist (regex per line)."
