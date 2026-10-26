// The active language lives on <html data-lang>. The inline script in Layout.astro sets it before
// first paint (saved choice, else the browser's, else Spanish); this module changes it and updates
// the few things CSS cannot: attributes, the tab title and the CV link.
export const getLang = () => document.documentElement.dataset.lang || "es";

export function sync() {
  const l = getLang();
  document.querySelectorAll("[data-attr]").forEach((e) => e.setAttribute(e.dataset.attr, e.dataset[l]));
  const t = document.querySelector("title[data-es]");
  if (t) document.title = t.dataset[l];
  document.querySelectorAll("a[data-cv]").forEach((a) => (a.href = l === "en" ? "/cv-en.pdf" : "/cv.pdf"));
}

export function setLang(l) {
  try {
    localStorage.setItem("lang", l);
  } catch {}
  document.documentElement.dataset.lang = l;
  document.documentElement.lang = l;
  sync();
  document.dispatchEvent(new CustomEvent("langchange", { detail: l }));
}

// the switcher island imports this file during the build too, where there is no document
if (typeof document !== "undefined") document.addEventListener("astro:page-load", sync);
