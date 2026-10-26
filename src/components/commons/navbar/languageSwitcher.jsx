import React, { useState, useEffect, useRef } from "react";
import { FiGlobe } from "react-icons/fi";
import { setLang } from "../../../scripts/lang.js";

const OPCIONES = [
  { id: "es", nombre: "Español" },
  { id: "en", nombre: "English" },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [lang, setCurrent] = useState("es");
  const ref = useRef(null);

  useEffect(() => {
    const read = () => setCurrent(document.documentElement.dataset.lang || "es");
    read();
    document.addEventListener("langchange", read);
    const outside = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    document.addEventListener("click", outside);
    return () => {
      document.removeEventListener("langchange", read);
      document.removeEventListener("click", outside);
    };
  }, []);

  const choose = (id) => {
    setLang(id);
    setOpen(false);
  };

  const onKey = (e) => {
    if (e.key === "Escape") setOpen(false);
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const items = [...ref.current.querySelectorAll("[role=menuitemradio]")];
    const i = items.indexOf(document.activeElement);
    items[(i + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length]?.focus();
  };

  return (
    <div ref={ref} className="relative" onKeyDown={onKey}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Idioma: Español"
        data-attr="aria-label"
        data-es="Idioma: Español"
        data-en="Language: English"
        onClick={() => setOpen((v) => !v)}
        className="relative flex cursor-pointer items-center gap-1 rounded-full p-2 text-white hover:bg-gray-700"
      >
        <FiGlobe className="text-2xl" />
        <span className="hidden text-xs font-bold md:inline">
          <span data-l="es">ES</span>
          <span data-l="en">EN</span>
        </span>
      </button>

      {open && (
        <div
          role="menu"
          className="bell-menu absolute right-0 z-50 mt-2 w-44 rounded-lg border-none bg-gray-900 p-1.5 shadow-lg drop-shadow-[4px_4px_0_#7836cf]"
        >
          {OPCIONES.map((o) => (
            <button
              key={o.id}
              type="button"
              role="menuitemradio"
              aria-checked={lang === o.id}
              data-opt={o.id}
              lang={o.id}
              onClick={() => choose(o.id)}
              className="flex min-h-11 w-full cursor-pointer items-center justify-between rounded-md px-3 py-2 text-left text-sm font-bold text-gray-200 hover:bg-white/10"
            >
              {o.nombre}
              <span className="lang-check" aria-hidden="true">✓</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
