// Unique-visitor counter. A random ID is created once in this browser and sent once to the small
// service in scripts/visitas.mjs, which stores only IDs (no IP, no cookie). The number is only
// shown in the retro skin; if the service is unreachable nothing happens and the counter stays "------".
const API = "/visitas";

const show = (n) =>
  document.querySelectorAll("#r-count").forEach((el) => (el.textContent = String(n).padStart(6, "0")));

async function contar() {
  const retro = document.documentElement.dataset.era;
  try {
    let id = localStorage.getItem("visitante");
    const nuevo = !id;
    if (nuevo) {
      id = crypto.randomUUID();
      localStorage.setItem("visitante", id); // throws when storage is blocked, so nothing is sent
    } else if (!retro) return; // a known visitor on the modern site: nothing to do
    const res = await fetch(API, nuevo ? { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ id }) } : {});
    if (res.ok) show((await res.json()).total);
  } catch {}
}

document.addEventListener("astro:page-load", contar);
document.addEventListener("erachange", (e) => e.detail && contar());
