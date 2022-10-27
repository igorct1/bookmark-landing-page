export default class SmoothScroll {
  constructor(menu) {
    this.menu = document.querySelectorAll(menu);
  }

  scrollSmooth(event) {
    event.preventDefault();
    const target = event.target;
    const href = target.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  }

  addMenuEvents() {
    this.menu.forEach((item) => {
      item.addEventListener("click", this.scrollSmooth);
    });
  }

  init() {
    this.addMenuEvents();
  }
}
