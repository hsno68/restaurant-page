import ElementBuilder, { contentContainer } from "./builderClass.js";

export default function contactPageLoad() {
  contentContainer.replaceChildren();

  const headingSection = new ElementBuilder("div")
    .child(new ElementBuilder("h1").text("Contact").build())
    .build();

  const detailsSection = new ElementBuilder("div")
    .html(
     `<p>Location Two<br/>
      123 Location Drive, State, CA, 00000<br/>
      555-555-5555<br/>
      contactEmail@email.com<br/>
      </p>`)
    .build();

  contentContainer.append(headingSection, detailsSection);
}