export default function contactPageLoad() {
  const contentContainer = document.querySelector("div#content-container");
  contentContainer.replaceChildren();

  const contactHeading = document.createElement("h1");
  contactHeading.textContent = "Contact Us";
  contentContainer.appendChild(contactHeading);

  const locationOneHeading = document.createElement("h2");
  locationOneHeading.textContent = "First Location";
  const locationOnePara = document.createElement("p");
  locationOnePara.innerText = `Location One
  123 Location Drive, State, CA, 00000
  555-555-5555
  contactEmail@email.com
  `;
  contentContainer.append(locationOneHeading, locationOnePara);

  const locationTwoHeading = document.createElement("h2");
  locationTwoHeading.textContent = "Second Location";
  const locationTwoPara = document.createElement("p");
  locationTwoPara.innerText = `Location Two
  123 Location Drive, State, CA, 00000
  555-555-5555
  contactEmail@email.com
  `;
  contentContainer.append(locationTwoHeading, locationTwoPara);

  const locationThreeHeading = document.createElement("h2");
  locationThreeHeading.textContent = "Third Location";
  const locationThreePara = document.createElement("p");
  locationThreePara.innerText = `Location Three
  123 Location Drive, State, CA, 00000
  555-555-5555
  contactEmail@email.com
  `;
  contentContainer.append(locationThreeHeading, locationThreePara);
}