import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

const STRINGS = {
  es: ["Ingeniero de software full-stack", "Backend y APIs", "Apps móviles con Flutter", "Linux, Docker y self-hosting", "Sistemas con IA"],
  en: ["Full-stack software engineer", "Backend and APIs", "Mobile apps with Flutter", "Linux, Docker and self-hosting", "AI systems"],
};

const TypewriterComponent = () => {
  // null until the browser tells us the language, so it never types in the wrong one first
  const [lang, setLang] = useState(null);

  useEffect(() => {
    const read = () => setLang(document.documentElement.dataset.lang || "es");
    read();
    document.addEventListener("langchange", read);
    return () => document.removeEventListener("langchange", read);
  }, []);

  return (
    <div className="notranslate mt-5 min-h-10 text-3xl font-bold">
      {lang && <Typewriter key={lang} options={{ strings: STRINGS[lang], autoStart: true, loop: true }} />}
    </div>
  );
};

export default TypewriterComponent;
