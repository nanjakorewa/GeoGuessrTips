"""Minimal shim for deprecated cgi module (Python 3.13 compatibility)."""
from __future__ import annotations

from typing import Dict, Tuple

__all__ = ["parse_header"]


def parse_header(value: str) -> Tuple[str, Dict[str, str]]:
    """Parse a Content-Type style header.

    Returns a `(type, params)` pair mimicking the behaviour of the removed
    :func:`cgi.parse_header`. This implementation is intentionally simple but
    adequate for the limited usage within httpx 0.13 (charset extraction).
    """
    if value is None:
        return "", {}
    parts = [part.strip() for part in value.split(';')]
    if not parts:
        return "", {}
    main = parts[0]
    params: Dict[str, str] = {}
    for item in parts[1:]:
        if not item:
            continue
        if '=' not in item:
            params[item.lower()] = ''
            continue
        key, val = item.split('=', 1)
        key = key.strip().lower()
        val = val.strip()
        if len(val) >= 2 and val[0] == val[-1] and val[0] in ('"', "'"):
            val = val[1:-1]
        params[key] = val
    return main, params
