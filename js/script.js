import SmoothScroll from "./smoothscroll.js";
import Accordion from "./accordion.js";
import Modal from "./modal.js";
const smoothScroll = new SmoothScroll('[data-anime="smooth"] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const modal = new Modal(
  '[data-modal="menu"]',
  '[data-modal="menuClose"]',
  '[data-modal="container"]'
);

modal.init();
