import { resumir } from "./eventos.js";

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
  const eventos = await gh(`/users/${USER}/events/public?per_page=100`);
  return eventos && { repos: resumir(eventos, USER) };
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
