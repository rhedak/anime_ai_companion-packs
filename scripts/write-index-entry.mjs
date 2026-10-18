import { createHash } from "node:crypto";
import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";

const [archive, metaPath, version, url, cli, expectedId] = process.argv.slice(2);
if (!archive || !metaPath || !version || !url || !cli || !expectedId) {
  console.error(
    "usage: node scripts/write-index-entry.mjs <archive> <publish.json> <version> <url> <pack-archive-cli.ts> <expected-id>",
  );
  process.exit(1);
}

const meta = JSON.parse(readFileSync(metaPath, "utf8"));
const allowed = new Set(["name", "description", "credit", "thumbnail", "aiMade", "character"]);
for (const key of Object.keys(meta)) {
  if (!allowed.has(key)) {
    console.error(`${metaPath} has ${key}, which is not a publish field.`);
    process.exit(1);
  }
}
if (typeof meta.name !== "string" || meta.name.trim() !== meta.name || meta.name.length === 0) {
  console.error(`${metaPath} needs a name.`);
  process.exit(1);
}

const args = [cli, "index", archive, "--name", meta.name, "--version", version, "--url", url];
if (typeof meta.description === "string") args.push("--description", meta.description);
if (typeof meta.credit === "string") args.push("--credit", meta.credit);
if (typeof meta.thumbnail === "string") args.push("--thumbnail", meta.thumbnail);
if (meta.aiMade === true) args.push("--ai-made");

const result = spawnSync(process.execPath, args, { encoding: "utf8" });
if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}
if (result.status !== 0) {
  process.stderr.write(result.stderr || "");
  process.stderr.write(result.stdout || "");
  process.exit(result.status ?? 1);
}

const doc = JSON.parse(result.stdout);
const entry = doc.packs?.[0];
if (!entry) {
  console.error("The pack-archive index command did not print a pack.");
  process.exit(1);
}
if (meta.aiMade === false) entry.aiMade = false;
// The pack-archive tool does not know the character: it is copied from the publish file, and the app's index check validates it.
if (meta.character !== undefined) entry.character = meta.character;
if (entry.id !== expectedId) {
  console.error(`The archive id is "${entry.id}". The folder name, and the pack id, is "${expectedId}".`);
  process.exit(1);
}

const bytes = readFileSync(archive);
const sha = createHash("sha256").update(bytes).digest("hex");
const size = bytes.length;
if (entry.hashes?.sha256 !== sha) {
  console.error(`sha256 mismatch: index has ${entry.hashes?.sha256}, the archive file is ${sha}.`);
  process.exit(1);
}
if (entry.sizes?.archiveBytes !== size) {
  console.error(`size mismatch: index has ${entry.sizes?.archiveBytes} bytes, the archive file is ${size}.`);
  process.exit(1);
}

process.stderr.write(`sha256 ${sha}\narchive bytes ${size}\n`);
process.stdout.write(`${JSON.stringify(doc, null, 2)}\n`);
