// "Feeling nostalgic?": html[data-era] switches the whole site to the early-2000s skin (retro.css).
// The choice lasts for the session: "2001" on, "off" turned off by the visitor, "no" checked and not private.
const KEY = "era";
const root = document.documentElement;
const read = () => {
  try {
    return sessionStorage.getItem(KEY);
  } catch {
    return null;
  }
};
const save = (v) => {
  try {
    sessionStorage.setItem(KEY, v);
  } catch {}
};

// Private windows keep data in memory, which shows in storage. There is no official signal, so this is a
// best-effort guess that may stop working when browsers change. Measured on Firefox 158 (works) and Edge
// (InPrivate is indistinguishable: same quota, memory limit, file system and IndexedDB), so Edge and Chrome
// rely on the footer link.
export async function esPrivado() {
  try {
    // Firefox blocks the origin-private file system in private windows (measured on Firefox 158)
    if (/firefox/i.test(navigator.userAgent)) {
      if (!window.isSecureContext || !navigator.storage?.getDirectory) return false;
      return await navigator.storage.getDirectory().then(() => false, () => true);
    }
    // older Chromium reported a much smaller storage quota in private windows
    const heap = performance.memory?.jsHeapSizeLimit;
    if (heap && navigator.storage?.estimate) return (await navigator.storage.estimate()).quota < heap * 2;
  } catch {}
  return false;
}

export function setEra(on) {
  save(on ? "2001" : "off");
  on ? root.setAttribute("data-era", "2001") : root.removeAttribute("data-era");
  if (on) window.scrollTo(0, 0);
  document.dispatchEvent(new CustomEvent("erachange", { detail: on }));
}

document.addEventListener("click", (e) => {
  if (e.target.closest?.("[data-era-on]")) setEra(true);
  else if (e.target.closest?.("[data-era-off]")) setEra(false);
});

if (read() === null) {
  esPrivado().then((privado) => (privado ? setEra(true) : save("no")));
}
