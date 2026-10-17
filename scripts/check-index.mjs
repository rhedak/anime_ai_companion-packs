import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const [indexPath, companionRoot] = process.argv.slice(2);
if (!indexPath || !companionRoot) {
  console.error("usage: node scripts/check-index.mjs <site/index.json> <anime_ai_companion checkout>");
  process.exit(1);
}

const { parsePackIndex } = await import(pathToFileURL(resolve(companionRoot, "src/pack-index.ts")).href);
const value = JSON.parse(await readFile(indexPath, "utf8"));
const parsed = parsePackIndex(value);
if (!parsed.ok) {
  console.error(parsed.reason);
  process.exit(1);
}
console.log(`index ok, ${parsed.index.packs.length} packs`);
