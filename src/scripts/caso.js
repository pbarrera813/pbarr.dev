import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { seconds } from "./tokens.js";

gsap.registerPlugin(ScrollTrigger);

const reduce = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let spy = () => {};

// tween every number inside a string (keeps "~", ",", "%", units and "a → b" shapes)
function countUp(el) {
  const final = el.textContent;
  const nums = final.match(/\d[\d,]*\.?\d*/g);
  if (!nums) return;
  const to = nums.map((n) => parseFloat(n.replace(/,/g, "")));
  const dec = nums.map((n) => n.split(".")[1]?.length ?? 0);
  const commas = nums.map((n) => n.includes(","));
  const state = { p: 0 };
  gsap.to(state, {
    p: 1,
    duration: seconds("--dur-slow") * 1.2,
    ease: "power2.out",
    onUpdate() {
      let i = 0;
      el.textContent = final.replace(/\d[\d,]*\.?\d*/g, () => {
        const k = i++;
        const v = to[k] * state.p;
        return commas[k] ? v.toLocaleString("en-US", { minimumFractionDigits: dec[k], maximumFractionDigits: dec[k] }) : v.toFixed(dec[k]);
      });
    },
    onComplete: () => (el.textContent = final),
  });
}

function enter(section) {
  section.dataset.visto = "";
  if (reduce()) return;
  const items = section.querySelectorAll("li, dl > div");
  if (items.length)
    gsap.from(items, {
      opacity: 0,
      y: 10,
      duration: seconds("--dur-slow") * 0.8,
      ease: "power2.out",
      delay: 0.3,
      stagger: Math.min(0.07, 0.5 / items.length),
      clearProps: "opacity,transform",
    });
  section.querySelectorAll("dd [data-l]").forEach((el) => gsap.delayedCall(0.55, countUp, [el]));
}

function setup() {
  window.removeEventListener("scroll", spy);
  const sections = document.querySelectorAll("[data-caso] [data-seccion]");
  if (!sections.length) return;

  sections.forEach((s) => ScrollTrigger.create({ trigger: s, start: "top 85%", once: true, onEnter: () => enter(s) }));

  const dots = [...document.querySelectorAll(".caso-rail a")];
  const list = [...sections];
  spy = () => {
    const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    let i = bottom ? list.length - 1 : list.findLastIndex((s) => s.getBoundingClientRect().top <= window.innerHeight * 0.5);
    dots.forEach((d, k) => (k === Math.max(i, 0) ? d.setAttribute("aria-current", "true") : d.removeAttribute("aria-current")));
  };
  window.addEventListener("scroll", spy, { passive: true });
  spy();
}

document.addEventListener("astro:before-swap", () => window.removeEventListener("scroll", spy));
document.addEventListener("astro:page-load", setup);
