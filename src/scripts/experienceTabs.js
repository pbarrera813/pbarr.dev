import { gsap } from "gsap";
import { seconds } from "./tokens.js";

let tl;
const reduce = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function moveBar(button, animate) {
  const bar = document.querySelector(".tab-indicator");
  if (!bar) return;
  const height = button.offsetHeight * 0.7;
  gsap.to(bar, {
    y: button.offsetTop + (button.offsetHeight - height) / 2,
    height,
    duration: animate ? seconds("--dur-base") * 1.3 : 0,
    ease: "power3.out",
    overwrite: true,
  });
}

function show(button) {
  tl?.progress(1).kill();
  const prev = document.querySelector(".tabcontent.active");
  const next = document.querySelector(`.tabcontent[data-index='${button.dataset.index}']`);
  if (!next || next === prev) return;
  const box = next.parentElement;
  const animate = !reduce();

  document.querySelectorAll(".tabbutton[data-index]").forEach((b) => {
    b.classList.toggle("active", b === button);
    b.setAttribute("aria-selected", String(b === button));
  });
  moveBar(button, animate);

  const swap = () => {
    prev?.classList.remove("active");
    next.classList.add("active");
  };
  if (!animate) return swap();

  // measure the destination height up front so the section below eases instead of jumping
  const from = box.offsetHeight;
  swap();
  const to = box.offsetHeight;
  prev?.classList.add("active");
  next.classList.remove("active");

  const fast = seconds("--dur-fast");
  const base = seconds("--dur-base");
  gsap.set(box, { height: from, overflow: "hidden" });
  tl = gsap
    .timeline({ onComplete: () => gsap.set([box, ...next.children], { clearProps: "all" }) })
    .to(prev, { opacity: 0, y: -6, duration: fast, ease: "power2.in" })
    .add(() => {
      swap();
      gsap.set(prev, { clearProps: "opacity,transform" });
    })
    .fromTo(box, { height: from }, { height: to, duration: base * 1.3, ease: "power3.out" })
    .fromTo(
      next.children,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: base * 1.4, ease: "power3.out", stagger: 0.06 },
      "<"
    );
}

const sync = () => {
  const active = document.querySelector(".tabbutton.active");
  if (active) moveBar(active, false);
};

document.addEventListener("click", (event) => {
  const button = event.target.closest?.(".tabbutton[data-index]");
  if (button) show(button);
});
document.addEventListener("astro:page-load", () => {
  sync();
  document.fonts?.ready.then(sync);
});
window.addEventListener("resize", sync);
document.addEventListener("langchange", sync); // button widths differ between languages
