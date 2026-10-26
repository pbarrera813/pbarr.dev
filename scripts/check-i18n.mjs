// Fails the build when a translation has only one side. Runs before `npm run build`.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const walk = (d) =>
  readdirSync(d).flatMap((f) => {
    const p = join(d, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const problems = [];
for (const file of walk("src").filter((f) => /\.(astro|jsx|js)$/.test(f))) {
  const src = readFileSync(file, "utf8");
  // <T es="..." en="..."> needs both (or spread data, or the slot form)
  for (const m of src.matchAll(/<T\s([^>]*?)\/?>/g)) {
    const a = m[1];
    if (/\.\.\./.test(a)) continue;
    if (/\bes=/.test(a) !== /\ben=/.test(a)) problems.push(`${file}: <T ${a.trim()}>`);
    if (/\bes=(""|'')/.test(a) || /\ben=(""|'')/.test(a)) problems.push(`${file}: empty text in <T ${a.trim()}>`);
  }
  // data objects: every `es:` has an `en:` next to it
  const objs = src.replace(/<T\s[^>]*?\/?>/g, "");
  const es = (objs.match(/\bes:\s*["'`]/g) || []).length;
  const en = (objs.match(/\ben:\s*["'`]/g) || []).length;
  if (es !== en) problems.push(`${file}: ${es} "es:" vs ${en} "en:"`);
}
if (problems.length) {
  console.error("i18n check failed:\n" + problems.map((p) => "  " + p).join("\n"));
  process.exit(1);
}
console.log("i18n check ok");
