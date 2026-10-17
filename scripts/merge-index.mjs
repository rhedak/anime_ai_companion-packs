import { readFile, writeFile } from "node:fs/promises";

const [indexPath, entryPath] = process.argv.slice(2);
if (!indexPath || !entryPath) {
  console.error("usage: node scripts/merge-index.mjs <site/index.json> <entry-document.json>");
  process.exit(1);
}

const index = JSON.parse(await readFile(indexPath, "utf8"));
const incoming = JSON.parse(await readFile(entryPath, "utf8"));
if (!index || index.format !== 1 || !Array.isArray(index.packs)) {
  console.error("site/index.json must be an object with format 1 and a packs array.");
  process.exit(1);
}
if (incoming?.format !== 1 || !Array.isArray(incoming.packs) || incoming.packs.length !== 1) {
  console.error("The entry document must be { format: 1, packs: [ one pack ] }.");
  process.exit(1);
}
const entry = incoming.packs[0];
if (!entry || typeof entry.id !== "string" || entry.id.length === 0) {
  console.error("The pack entry needs an id.");
  process.exit(1);
}

const packs = index.packs.filter((pack) => pack && pack.id !== entry.id);
packs.push(entry);
packs.sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
await writeFile(indexPath, `${JSON.stringify({ format: 1, packs }, null, 2)}\n`);
console.log(`index lists ${packs.length} pack${packs.length === 1 ? "" : "s"} (${entry.id} version ${entry.version}).`);
