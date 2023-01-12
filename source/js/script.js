const menuButton = document.querySelector(".header__toggle-button");
const header = document.querySelector(".page-header");
const logoMob = document.querySelector(".page-header__logo-img--mob");
const logoTablet = document.querySelector(".page-header__logo-img--tablet");
const tariffsModal = document.querySelector(".tariffs-modal");
const tariffsLink = document.querySelector(".tariffs__link");
const tariffCloseButton = document.querySelector(".tarriffs__close-button");
const popupWrapper = document.querySelector(".popup-wrapper");

popupWrapper.classList.remove("popup-wrapper--nojs");

menuButton.addEventListener("click", () => {
  popupWrapper.classList.toggle("popup-wrapper--opened");
  header.classList.toggle("page-header--mobile-open");
  logoMob.setAttribute("src", "img/logo/logo-mobile-menu-open.png");
  logoTablet.setAttribute("srcset", "img/logo/logo-tablet-footer.png");
  if (menuButton.classList.contains("header__toggle-button--opened")) {
    logoMob.setAttribute("src", "img/logo/logo-mobile.png");
    logoTablet.setAttribute("srcset", "img/logo/logo-tablet.png");
  }
  menuButton.classList.toggle("header__toggle-button--opened");
});

if (tariffCloseButton) {
  tariffCloseButton.addEventListener("click", () => {
    tariffsModal.classList.remove("tariffs-modal--open");
  });
  tariffsLink.addEventListener("click", (e) => {
    e.preventDefault();
    tariffsModal.classList.add("tariffs-modal--open");
  });
}
