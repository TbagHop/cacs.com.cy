const btn = document.getElementById("nav-icon1");
const menu = document.getElementById("mobile-menu");
const backdrop = document.getElementById("menu-backdrop");
const closeBtn = document.getElementById("menu-close");

const openMenu = () => {
  btn.classList.add("open");
  btn.setAttribute("aria-expanded", "true");
  menu.hidden = false;
  backdrop.hidden = false;
  menu.classList.add("is-open");
};

const closeMenu = () => {
  btn.classList.remove("open");
  btn.setAttribute("aria-expanded", "false");
  menu.classList.remove("is-open");
  backdrop.hidden = true;
  setTimeout(() => {
    menu.hidden = true;
  }, 240);
};

btn.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = btn.getAttribute("aria-expanded") === "true";
  if (isOpen) closeMenu();
  else openMenu();
});

closeBtn.addEventListener("click", closeMenu);
backdrop.addEventListener("click", closeMenu);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});
