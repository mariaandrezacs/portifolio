const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav.menu ul");

toggle.addEventListener("click", () => {
  menu.classList.toggle("show");

  const expanded = toggle.getAttribute("aria-expanded") === "true" || false;
  toggle.setAttribute("aria-expanded", !expanded);
});
