import SmoothScroll from "./smoothscroll.js";
import Accordion from "./accordion.js";
import Modal from "./modal.js";
import MenuMobile from "./menu-mobile.js";

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

const menuMobile = new MenuMobile(
  '[data-menu="hamburguer"]',
  '[data-menu="list"]'
);
menuMobile.init();
