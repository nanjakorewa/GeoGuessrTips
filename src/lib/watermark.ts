/**
 * Invisible zero-width text watermark.
 *
 * Encodes a short signature (typically the page's canonical URL + lastmod)
 * into a run of zero-width characters that are invisible to readers but ride
 * along when the visible text is copy-pasted. If a near-verbatim repost shows
 * up elsewhere (note.com 等), paste it into `scripts/decode-watermark.mjs` to
 * recover the originating page — undeniable proof the text was copied from here.
 *
 * Encoding:
 *   payload = "GPWM:" + signature + "\n"   (magic prefix + newline terminator)
 *   each UTF-8 byte → 8 bits (MSB first)
 *   bit 0 → U+200B (zero-width space)
 *   bit 1 → U+200C (zero-width non-joiner)
 *
 * The magic prefix + newline let the decoder locate and split watermarks even
 * when several are concatenated (we inject one before and one after the body)
 * or surrounded by unrelated zero-width characters.
 */

const ZERO = "​"; // bit 0 — zero-width space
const ONE = "‌"; // bit 1 — zero-width non-joiner
const MAGIC = "GPWM:";

function utf8Bytes(s: string): number[] {
  // TextEncoder is available in Node 18+, browsers, and the Astro build runtime.
  return Array.from(new TextEncoder().encode(s));
}

export function encodeWatermark(signature: string): string {
  const payload = `${MAGIC}${signature}\n`;
  let out = "";
  for (const byte of utf8Bytes(payload)) {
    for (let bit = 7; bit >= 0; bit--) {
      out += (byte >> bit) & 1 ? ONE : ZERO;
    }
  }
  return out;
}

/**
 * Recover every embedded signature from a blob of (possibly pasted) text.
 * Tolerant of partial copies and surrounding noise: non-zero-width characters
 * are ignored, and only well-formed, magic-prefixed payloads are returned.
 */
export function decodeWatermarks(text: string): string[] {
  const bits = Array.from(text)
    .map((c) => (c === ONE ? "1" : c === ZERO ? "0" : ""))
    .join("");
  const bytes: number[] = [];
  for (let i = 0; i + 8 <= bits.length; i += 8) {
    bytes.push(parseInt(bits.slice(i, i + 8), 2));
  }
  let decoded: string;
  try {
    decoded = new TextDecoder().decode(new Uint8Array(bytes));
  } catch {
    return [];
  }
  return decoded
    .split("\n")
    .filter((token) => token.startsWith(MAGIC))
    .map((token) => token.slice(MAGIC.length));
}
