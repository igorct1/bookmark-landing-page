import SmoothScroll from "./smoothscroll.js";
import Accordion from "./accordion.js";

const smoothScroll = new SmoothScroll('[data-anime="smooth"] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();
