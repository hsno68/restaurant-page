import "./styles.css";
import homePageLoad from "./homepage.js";
import menuPageLoad from "./menu.js";

homePageLoad();

const homeButton = document.querySelector("button.home");
const menuButton = document.querySelector("button.menu");

homeButton.addEventListener("click", homePageLoad);
menuButton.addEventListener("click", menuPageLoad);