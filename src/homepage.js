import ElementBuilder, { contentContainer } from "./builderClass.js";

export default function homePageLoad() {
  contentContainer.replaceChildren();

  const headingSection = new ElementBuilder("div")
    .child(new ElementBuilder("h1").text("Restaurant Name").build())
    .build();

  const aboutSection = new ElementBuilder("div")
    .child(new ElementBuilder("h2").text("About").build())
    .child(new ElementBuilder("p").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida, mi in varius gravida, ante ex tempor ex, sit amet tincidunt turpis orci ut metus. Ut tortor ligula, cursus non aliquam in, elementum nec ante. Donec maximus luctus odio at sagittis. Fusce iaculis cursus turpis, sed viverra lectus lobortis a.").build())
    .build();

  const timeSection = new ElementBuilder("div")
    .child(new ElementBuilder("h2").text("Hours").build())
    .child(new ElementBuilder("ul").html(
     `<li>Monday: 9am - 10pm</li>
      <li>Tuesday: 9am - 10pm</li>
      <li>Wednesday: 9am - 10pm</li>
      <li>Thursday: 9am - 10pm</li>
      <li>Friday: 9am - 11pm</li>
      <li>Saturday: 9am - 11pm</li>
      <li>Sunday: 9am - 11pm</li>`).build())
    .build();

  const locationSection = new ElementBuilder("div")
    .child(new ElementBuilder("h2").text("Location").build())
    .child(new ElementBuilder("p").text("123 Location Drive, Location, CA, 00000").build())
    .build();

  contentContainer.append(headingSection, aboutSection, timeSection, locationSection);
}