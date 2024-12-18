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

function getCookie(name) {
  console.log(document.cookie);
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

let cookiecook = getCookie("cookiecook"),
  cookiModal = document.querySelector(".cookie-modal");

if (cookiecook != "no") {
  cookiModal.classList.add("cookie-modal_active");

  document
    .querySelector(".cookie-modal__accept-btn")
    .addEventListener("click", function () {
      cookiModal.classList.remove("cookie-modal_active");
      let date = new Date();
      date.setDate(date.getDate() + 30);
      document.cookie = "cookiecook=no; path=/; expires=" + date.toUTCString();
    });
}
