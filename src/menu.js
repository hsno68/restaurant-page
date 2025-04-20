export default function menuPageLoad() {
  const contentContainer = document.querySelector("div#content-container");
  contentContainer.replaceChildren();
  
  const menuHeading = document.createElement("h1");
  menuHeading.textContent = "Menu";
  contentContainer.appendChild(menuHeading);

  const numberOfDishes = 12;

  for (let i = 0; i <= numberOfDishes; i++) {
    const div = document.createElement("div");
    const cardHeading = document.createElement("h3");
    cardHeading.textContent = "Dish Name";
    const dishPriceHeading = document.createElement("h3");
    dishPriceHeading.textContent = "$15.00";
    const dishDescriptionPara = document.createElement("p");
    dishDescriptionPara.textContent = "This is where you insert dish ingredients.";
    div.append(cardHeading, dishPriceHeading, dishDescriptionPara);
    contentContainer.appendChild(div);
  }
}