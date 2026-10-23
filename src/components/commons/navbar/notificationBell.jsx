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
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-label={
          unreadCount > 0
            ? `Novedades, ${unreadCount} sin leer`
            : "Novedades"
        }
        onClick={toggle}
        className="relative rounded-full p-2 hover:bg-gray-700"
      >
        <FaBell className="text-2xl text-white cursor-pointer" />
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
              Novedades
            </h4>
            <ul className="max-h-60 divide-y divide-gray-800 overflow-y-auto scroll-fino">
              {novedades.map((n) => (
                <li key={n.texto} className="py-2 text-sm text-gray-400">
                  <time dateTime={n.fecha} className="block text-xs opacity-70">
                    {new Date(`${n.fecha}T00:00:00`).toLocaleDateString("es-MX", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                  {n.href ? (
                    <a href={n.href} className="font-bold underline">
                      {n.texto}
                    </a>
                  ) : (
                    n.texto
                  )}
                </li>
              ))}
            </ul>
            <a href="/blog" className="mt-2 block text-sm font-bold underline">
              Ver el blog
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
