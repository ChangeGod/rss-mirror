import fs from 'fs/promises';

// 🔧 List the source files you want to mirror here.
// Add or remove names as needed.
const FILES = [
  'cumdaura1.xml',
];

const BASE_URL = 'https://changegod.github.io/rss-mix';

for (const src of FILES) {
  try {
    const res = await fetch(`${BASE_URL}/${src}`);
    if (!res.ok) {
      console.error(`❌ Fetch failed for ${src}: HTTP ${res.status}`);
      continue;
    }

    const xml = await res.text();
    const dest = src.replace('cumdaura', 'cumdauramirror');
    await fs.writeFile(dest, xml, 'utf8');
    console.log(`✅ Written ${dest}`);
  } catch (err) {
    console.error(`⚠️ Error processing ${src}:`, err);
  }
}
