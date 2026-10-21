import { gsap } from "gsap";
import { seconds } from "./tokens.js";

const reduce = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const base = () => seconds("--dur-base");

function open(item) {
  const body = item.querySelector(".faq-body");
  item.open = true;
  item.dataset.abierto = "";
  if (reduce()) return;
  gsap.fromTo(
    body,
    { height: 0, opacity: 0 },
    { height: "auto", opacity: 1, duration: base() * 1.3, ease: "power3.out", overwrite: true, clearProps: "height,opacity" }
  );
}

function close(item) {
  const body = item.querySelector(".faq-body");
  delete item.dataset.abierto;
  if (reduce()) {
    item.open = false;
    return;
  }
  gsap.to(body, {
    height: 0,
    opacity: 0,
    duration: base(),
    ease: "power2.inOut",
    overwrite: true,
    onComplete: () => {
      item.open = false;
      gsap.set(body, { clearProps: "height,opacity" });
    },
  });
}

document.addEventListener("click", (event) => {
  const summary = event.target.closest?.(".faq > summary");
  if (!summary) return;
  event.preventDefault();
  const item = summary.parentElement;
  if (item.hasAttribute("data-abierto")) {
    close(item);
  } else {
    document.querySelectorAll(".faq[data-abierto]").forEach(close);
    open(item);
  }
});
