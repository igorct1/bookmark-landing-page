import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuMobile, menuList) {
    this.menuMobile = document.querySelector(menuMobile);
    this.menuList = document.querySelector(menuList);
    this.activeClass = "active";
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.add(this.activeClass);
    this.menuMobile.classList.add(this.activeClass);
    outsideClick(this.menuList, ["click"], () => {
      this.menuList.classList.remove("active");
      this.menuMobile.classList.remove("active");
    });
  }

  addMenuEvent() {
    this.menuMobile.addEventListener("click", this.openMenu);
  }

  init() {
    this.addMenuEvent();
  }
}
