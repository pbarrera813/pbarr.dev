import React, { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

function getIsDark() {
  if (typeof window === "undefined") return false;
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "dark") return true;
  if (saved === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const next = getIsDark();
    setIsDark(next);
    document.documentElement.classList.toggle("theme-dark", next);
  }, []);

  const toggleTheme = (event) => {
    const next = !isDark;
    const html = document.documentElement;
    const apply = () => {
      html.classList.toggle("theme-dark", next);
      window.localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    };
    setIsDark(next);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduce) return apply();

    const box = event.currentTarget.getBoundingClientRect();
    const x = box.left + box.width / 2;
    const y = box.top + box.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    html.classList.add("theme-switching");
    const transition = document.startViewTransition(apply);
    transition.ready.then(() =>
      html.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 520, easing: "cubic-bezier(0.22, 1, 0.36, 1)", pseudoElement: "::view-transition-new(root)" }
      )
    );
    transition.finished.finally(() => html.classList.remove("theme-switching"));
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle light and dark mode"
      aria-pressed={isDark}
      title={isDark ? "Dark mode" : "Light mode"}
    >
      <span className="theme-toggle__sky">
        <span className="theme-toggle__stars">
          <span className="theme-toggle__star" style={{ top: "9px", left: "10px" }} />
          <span className="theme-toggle__star s2" style={{ top: "14px", left: "22px" }} />
          <span className="theme-toggle__star s3" style={{ top: "24px", left: "16px" }} />
          <span className="theme-toggle__star s2" style={{ top: "22px", left: "30px" }} />
        </span>
        <span className="theme-toggle__clouds">
          <span className="theme-toggle__cloud" style={{ top: "9px", left: "41px" }} />
          <span className="theme-toggle__cloud" style={{ top: "22px", left: "53px" }} />
        </span>
      </span>
      <span className="theme-toggle__knob">
        <span className="theme-toggle__crater" style={{ width: "6px", height: "6px", top: "8px", left: "16px" }} />
        <span className="theme-toggle__crater" style={{ width: "8px", height: "8px", top: "18px", left: "8px" }} />
        <span className="theme-toggle__crater" style={{ width: "4px", height: "4px", top: "19px", left: "20px" }} />
      </span>
    </button>
  );
}
