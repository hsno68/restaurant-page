import "./styles.css";
import homePageLoad from "./homepage.js";
import menuPageLoad from "./menu.js";
import contactPageLoad from "./contact.js";

homePageLoad();

const homeButton = document.querySelector("button.home");
const menuButton = document.querySelector("button.menu");
const contactButton = document.querySelector("button.contact");

homeButton.addEventListener("click", homePageLoad);
menuButton.addEventListener("click", menuPageLoad);
contactButton.addEventListener("click", contactPageLoad);