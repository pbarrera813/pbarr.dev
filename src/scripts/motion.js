import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { seconds } from "./tokens.js";

gsap.registerPlugin(ScrollTrigger);

const root = document.documentElement;

function setup() {
  if (document.body.dataset.motion) return;
  document.body.dataset.motion = "1";
  if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
    ScrollTrigger.batch("[data-reveal]", {
      start: "top 85%",
      once: true,
      batchMax: 8,
      interval: 0.08,
      onEnter: (els) =>
        gsap.to(els, {
          opacity: 1,
          y: 0,
          duration: seconds("--dur-slow"),
          ease: "power2.out",
          stagger: 0.09,
          overwrite: true,
          // hand control back to CSS so hover styles (lift) are not pinned by GSAP's inline transform/translate
          onComplete: () =>
            els.forEach((el) => {
              gsap.set(el, { clearProps: "opacity,transform,translate,scale,rotate" });
              el.setAttribute("data-revealed", "");
            }),
        }),
    });
  }
  root.classList.add("motion-ready");
  onScroll();
}

function onScroll() {
  root.toggleAttribute("data-scrolled", window.scrollY > 8);
}

window.addEventListener("scroll", onScroll, { passive: true });
document.addEventListener("astro:before-swap", () => ScrollTrigger.getAll().forEach((t) => t.kill()));
document.addEventListener("astro:page-load", setup);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setup);
} else {
  setup();
}
