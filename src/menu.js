import ElementBuilder, { contentContainer } from "./builderClass.js";

export default function menuPageLoad() {
  contentContainer.replaceChildren();

  const headingSection = new ElementBuilder("div")
    .child(new ElementBuilder("h1").text("Menu").build())
    .build();

  const menuSection = new ElementBuilder("div")
    .build();

  itemCardsBuilder().forEach(card => menuSection.appendChild(card));

  function itemCardsBuilder() {
    const cards = [];
    for (let i = 0; i <= 12; i++) {
      cards.push(new ElementBuilder("div")
      .child(new ElementBuilder("h3").text("Dish Name").build())
      .child(new ElementBuilder("h4").text("Dish Price").build())
      .child(new ElementBuilder("p").text("This is where you insert dish ingredients.").build())
      .build());
    }
    return cards;
  }

  contentContainer.append(headingSection, menuSection);
}