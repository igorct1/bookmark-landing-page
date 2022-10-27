export default class Modal {
  constructor(menu, menuClose, container) {
    this.menu = document.querySelector(menu);
    this.menuClose = document.querySelector(menuClose);
    this.container = document.querySelector(container);
    this.activeClass = "active";

    this.toggleModal = this.toggleModal.bind(this);
    this.verifyClick = this.verifyClick.bind(this);
  }

  toggleModal() {
    this.container.classList.toggle(this.activeClass);
    this.menuClose.addEventListener("click", this.toggleModal);
    this.container.addEventListener("click", this.verifyClick);
  }

  verifyClick({ target }) {
    if (target === this.container) {
      this.toggleModal();
    }
  }

  addMenuEvent() {
    this.menu.addEventListener("click", this.toggleModal);
  }

  init() {
    this.addMenuEvent();
  }
}
