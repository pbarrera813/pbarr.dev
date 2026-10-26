import React, { useState, useEffect, useRef } from "react";
import { FaBell } from "react-icons/fa";

const STORAGE_KEY = "novedades-visto";

export default function NotificationBell({ novedades = [] }) {
  const latest = novedades[0]?.fecha ?? "";
  const [open, setOpen] = useState(false);
  const [seen, setSeen] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    try {
      setSeen(localStorage.getItem(STORAGE_KEY) ?? "");
    } catch {
      setSeen("");
    }
  }, []);

  useEffect(() => {
    function handleDocClick(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleDocClick);
    return () => document.removeEventListener("click", handleDocClick);
  }, []);

  const unreadCount =
    seen === null ? 0 : novedades.filter((n) => n.fecha > seen).length;

  const toggle = () => {
    setOpen((v) => !v);
    if (!open && seen !== latest) {
      setSeen(latest);
      try {
        localStorage.setItem(STORAGE_KEY, latest);
      } catch {}
    }
  };

  return (
    <div ref={containerRef} className="relative" data-bell>
      <button
        type="button"
        aria-expanded={open}
        onClick={toggle}
        className="relative rounded-full p-2 hover:bg-gray-700"
      >
        <span className="sr-only">
          <span data-l="es">{unreadCount > 0 ? `Novedades, ${unreadCount} sin leer` : "Novedades"}</span>
          <span data-l="en">{unreadCount > 0 ? `News, ${unreadCount} unread` : "News"}</span>
        </span>
        <FaBell className="text-2xl text-white cursor-pointer" aria-hidden="true" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="bell-menu absolute right-0 z-50 mt-2 w-72 max-w-sm rounded-lg border-none bg-gray-900 shadow-lg drop-shadow-[4px_4px_0_#7836cf]">
          <div className="p-3">
            <h4 className="mb-2 text-sm font-bold text-gray-200 drop-shadow-[1px_1px_0_#7836cf]">
              <span data-l="es">Novedades</span>
              <span data-l="en">News</span>
            </h4>
            <ul className="max-h-60 divide-y divide-gray-800 overflow-y-auto scroll-fino">
              {novedades.map((n) => (
                <li key={n.texto.es} className="py-2 text-sm text-gray-400">
                  <time dateTime={n.fecha} className="block text-xs opacity-70">
                    {["es", "en"].map((l) => (
                      <span key={l} data-l={l}>
                        {new Date(`${n.fecha}T00:00:00`).toLocaleDateString(l === "es" ? "es-MX" : "en-US", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    ))}
                  </time>
                  {n.href ? (
                    <a href={n.href} className="font-bold underline">
                      <span data-l="es">{n.texto.es}</span>
                      <span data-l="en">{n.texto.en}</span>
                    </a>
                  ) : (
                    <>
                      <span data-l="es">{n.texto.es}</span>
                      <span data-l="en">{n.texto.en}</span>
                    </>
                  )}
                </li>
              ))}
            </ul>
            <a href="/blog" className="mt-2 block text-sm font-bold underline">
              <span data-l="es">Ver el blog</span>
              <span data-l="en">See the blog</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
