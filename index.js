document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.querySelector(".burger-btn");
  const burgerMenu = document.querySelector(".header__fullscreen-menu");
  const closeBtn = document.querySelector(".close-btn");

  const toggleMenu = () => {
    const isActive = burgerMenu.classList.toggle(
      "header__fullscreen-menu_active"
    );
    document.body.style.overflow = isActive ? "hidden" : "";
  };

  burgerBtn.addEventListener("click", toggleMenu);
  closeBtn.addEventListener("click", toggleMenu);
});
