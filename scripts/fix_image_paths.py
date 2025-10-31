#!/usr/bin/env python3
"""
Scan the content/ tree and normalise <img src="..."> paths in translated
Markdown files so that they resolve correctly regardless of language prefix.
Only relative paths that point to existing files inside content/ are updated.
"""

from __future__ import annotations

import re
from pathlib import Path
from typing import Iterable


CONTENT_ROOT = Path("content").resolve()
LANG_SUFFIXES: tuple[str, ...] = (".en.md", ".es.md", ".id.md", ".pt.md")

IMG_SRC_PATTERN = re.compile(
    r'(<img[^>]*\bsrc\s*=\s*")(?!https?://|data:|/)([^"]+)(")',
    re.IGNORECASE,
)


def iter_markdown_files(root: Path, suffixes: Iterable[str]) -> Iterable[Path]:
    """Yield Markdown files within root that match the desired suffixes."""
    for path in root.rglob("*"):
        if path.suffixes[-2:] and "".join(path.suffixes[-2:]) in suffixes:
            if path.is_file():
                yield path


def normalize_src(md_file: Path, original_src: str) -> str | None:
    """
    Convert a relative image path to an absolute path (rooted at content/).
    Returns None if the path cannot be resolved safely.
    """
    target_path = (md_file.parent / original_src).resolve()
    if not target_path.exists():
        return None
    try:
        relative = target_path.relative_to(CONTENT_ROOT)
    except ValueError:
        return None
    return "/" + relative.as_posix()


def fix_file(md_file: Path) -> bool:
    """
    Update <img src="..."> attributes in a single Markdown file.
    Returns True if any changes were written.
    """
    changed = False
    text = md_file.read_text(encoding="utf-8")

    def replacement(match: re.Match[str]) -> str:
        nonlocal changed
        original_src = match.group(2)
        normalized = normalize_src(md_file, original_src)
        if not normalized:
            return match.group(0)
        changed = True
        return f'{match.group(1)}{normalized}{match.group(3)}'

    new_text = IMG_SRC_PATTERN.sub(replacement, text)
    if changed:
        md_file.write_text(new_text, encoding="utf-8")
    return changed


def main() -> None:
    updated_files: list[Path] = []
    for md_file in iter_markdown_files(CONTENT_ROOT, LANG_SUFFIXES):
        if fix_file(md_file):
            updated_files.append(md_file)

    if updated_files:
        print("Updated image paths in:")
        for path in updated_files:
            try:
                relative = path.relative_to(CONTENT_ROOT.parent)
            except ValueError:
                relative = path
            print(f"  - {relative}")
    else:
        print("No changes were necessary.")


if __name__ == "__main__":
    main()
