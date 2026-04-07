import fs from 'node:fs';
for (const p of ['.astro', 'node_modules/.astro', 'node_modules/.vite']) {
  fs.rmSync(p, { recursive: true, force: true });
}
