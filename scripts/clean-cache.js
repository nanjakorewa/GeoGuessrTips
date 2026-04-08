import fs from 'node:fs';
for (const p of ['.astro', 'dist', 'node_modules/.astro', 'node_modules/.vite']) {
  fs.rmSync(p, { recursive: true, force: true });
}
