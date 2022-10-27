export default class Accordion {
  constructor(list) {
    this.list = document.querySelectorAll(list);
    this.activeClass = "active";

    //bind
    this.toggleAccordionItem = this.toggleAccordionItem.bind(this);
  }

  toggleAccordionItem({ target }) {
    target.classList.toggle(this.activeClass);
    target.nextElementSibling.classList.toggle(this.activeClass);
  }

  addAccordionEvents() {
    this.list.forEach((accordion) => {
      accordion.addEventListener("click", this.toggleAccordionItem);
    });
  }

  init() {
    this.list[0].classList.add(this.activeClass);
    this.list[0].nextElementSibling.classList.add(this.activeClass);
    this.addAccordionEvents();
  }
}
