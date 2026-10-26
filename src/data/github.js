const USER = "pbarrera813";

const headers = {
  Accept: "application/vnd.github+json",
  ...(process.env.GITHUB_TOKEN && {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  }),
};

async function gh(path) {
  try {
    const res = await fetch(`https://api.github.com${path}`, {
      headers,
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (e) {
    console.warn(`[github] ${path}: ${e.message}`);
    return null;
  }
}

async function cargarActividad() {
  const [repos, prs] = await Promise.all([
    gh(`/users/${USER}/repos?sort=pushed&per_page=10`),
    gh(`/search/issues?q=author:${USER}+is:pr+is:merged+-user:${USER}&per_page=1`),
  ]);
  if (!repos) return null;
  return {
    repos: repos.filter((r) => r.name !== USER).slice(0, 4),
    prsFusionados: prs?.total_count ?? 0,
  };
}

let pendiente;
export const actividad = () => (pendiente ??= cargarActividad());

export const fecha = (iso, loc = "es-MX") =>
  new Date(iso).toLocaleDateString(loc, {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
