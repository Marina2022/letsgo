const menuButton=document.querySelector(".header__toggle-button"),header=document.querySelector(".page-header"),logoMob=document.querySelector(".page-header__logo-img--mob"),logoTablet=document.querySelector(".page-header__logo-img--tablet"),tariffsModal=document.querySelector(".tariffs-modal"),tariffsLink=document.querySelector(".tariffs__link"),tariffCloseButton=document.querySelector(".tarriffs__close-button"),popupWrapper=document.querySelector(".popup-wrapper");popupWrapper.classList.remove("popup-wrapper--nojs"),menuButton.addEventListener("click",(()=>{popupWrapper.classList.toggle("popup-wrapper--opened"),header.classList.toggle("page-header--mobile-open"),logoMob.setAttribute("src","img/logo/logo-mobile-menu-open.png"),logoTablet.setAttribute("srcset","img/logo/logo-tablet-footer.png"),menuButton.classList.contains("header__toggle-button--opened")&&(logoMob.setAttribute("src","img/logo/logo-mobile.png"),logoTablet.setAttribute("srcset","img/logo/logo-tablet.png")),menuButton.classList.toggle("header__toggle-button--opened")})),tariffCloseButton&&(tariffCloseButton.addEventListener("click",(()=>{tariffsModal.classList.remove("tariffs-modal--open")})),tariffsLink.addEventListener("click",(e=>{e.preventDefault(),tariffsModal.classList.add("tariffs-modal--open")})));