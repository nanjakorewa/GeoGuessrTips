#!/usr/bin/env node
/**
 * Recover the originating page(s) from text copied off a suspected repost.
 *
 * Usage:
 *   node scripts/decode-watermark.mjs path/to/pasted.txt
 *   pbpaste | node scripts/decode-watermark.mjs        # macOS
 *   Get-Clipboard | node scripts/decode-watermark.mjs  # PowerShell
 *
 * Paste the copied article text into a file (or pipe via stdin) and run this.
 * If the text was copied from geopinning.space, it prints the exact source URL
 * (and lastmod) that was invisibly embedded. Mirrors the encoder in
 * src/lib/watermark.ts — keep the two in sync.
 */
import { readFileSync } from "node:fs";

const ZERO = "​"; // bit 0
const ONE = "‌"; // bit 1
const MAGIC = "GPWM:";

function decodeWatermarks(text) {
  let bits = "";
  for (const c of text) bits += c === ONE ? "1" : c === ZERO ? "0" : "";
  const bytes = [];
  for (let i = 0; i + 8 <= bits.length; i += 8) {
    bytes.push(parseInt(bits.slice(i, i + 8), 2));
  }
  let decoded;
  try {
    decoded = new TextDecoder().decode(new Uint8Array(bytes));
  } catch {
    return [];
  }
  return decoded
    .split("\n")
    .filter((t) => t.startsWith(MAGIC))
    .map((t) => t.slice(MAGIC.length));
}

function readInput() {
  const file = process.argv[2];
  if (file) return readFileSync(file, "utf8");
  return readFileSync(0, "utf8"); // stdin
}

const input = readInput();
const found = [...new Set(decodeWatermarks(input))];

if (found.length === 0) {
  console.error(
    "No geopinning.space watermark found.\n" +
      "(The text may have been retyped/rewritten, or the zero-width marks were stripped.)",
  );
  process.exit(1);
}

console.log("Watermark(s) recovered — this text was copied from:");
for (const sig of found) console.log("  " + sig);
