import { readFileSync } from "node:fs";

const src = readFileSync(new URL("../src/data/projectData.js", import.meta.url), "utf8");
const headers = { "User-Agent": "portfolio-check", ...(process.env.GITHUB_TOKEN && { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }) };
const api = async (path) => {
  const r = await fetch(`https://api.github.com/${path}`, { headers });
  if (r.status === 404) return null;
  if (!r.ok) throw new Error(`${path}: HTTP ${r.status}`);
  return r.json();
};
const ver = (s) => s.split(".").map(Number);
const newer = (a, b) => {
  for (let i = 0; i < 3; i++) if (a[i] !== b[i]) return a[i] > b[i];
  return false;
};

const warnings = [];
const defaults = new Map();
const defaultBranch = async (o, r) => {
  const key = `${o}/${r}`;
  if (!defaults.has(key)) defaults.set(key, (await api(`repos/${key}`))?.default_branch ?? null);
  return defaults.get(key);
};

for (const chunk of src.split(/^\s*slug: /m).slice(1)) {
  const slug = chunk.match(/^"?([\w-]+)/)[1];

  for (const [, o, r, branch] of chunk.matchAll(/github\.com\/([^/\s"]+)\/([^/\s"]+)\/(?:tree|blob)\/([^/\s"]+)/g)) {
    const main = await defaultBranch(o, r);
    if (main !== branch) warnings.push(`${slug}: link to ${o}/${r} uses branch "${branch}", default is "${main}"`);
  }

  const repo = chunk.match(/codigo:\s*"https:\/\/github\.com\/([^/"]+)\/([^/"]+)/);
  if (!repo) continue;
  const [, o, r] = repo;
  if (!(await defaultBranch(o, r))) { warnings.push(`${slug}: repository ${o}/${r} not found`); continue; }

  const release = await api(`repos/${o}/${r}/releases/latest`);
  if (!release) continue;
  if (/estado:\s*"En desarrollo"/.test(chunk)) warnings.push(`${slug}: marked "En desarrollo" but ${o}/${r} has a release (${release.tag_name})`);

  const latest = release.tag_name.match(/\d+\.\d+\.\d+/)?.[0];
  // Any version-like text on the page counts (for example "1.21.11"); add a per-project version field if that hides a stale page.
  const mentioned = [...chunk.matchAll(/\b\d+\.\d+\.\d+\b/g)].map((m) => ver(m[0]));
  if (latest && !mentioned.some((m) => !newer(ver(latest), m))) warnings.push(`${slug}: latest release ${release.tag_name} is newer than any version written on the page`);
}

warnings.forEach((w) => console.log("warn:", w));
console.log(warnings.length ? `check-github: ${warnings.length} warning(s)` : "check-github ok");
process.exitCode = warnings.length ? 1 : 0;
