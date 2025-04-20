export default function homePageLoad() {
  const contentContainer = document.querySelector("div#content-container");
  contentContainer.replaceChildren();

  const restaurantNameHeading = document.createElement("h1");
  restaurantNameHeading.textContent = "Restaurant Name";
  contentContainer.appendChild(restaurantNameHeading);

  const aboutHeading = document.createElement("h2");
  aboutHeading.textContent = "About";
  contentContainer.appendChild(aboutHeading);
  
  const aboutPara = document.createElement("p");
  aboutPara.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida, mi in varius gravida, ante ex tempor ex, sit amet tincidunt turpis orci ut metus. Ut tortor ligula, cursus non aliquam in, elementum nec ante. Donec maximus luctus odio at sagittis. Fusce iaculis cursus turpis, sed viverra lectus lobortis a.";
  contentContainer.appendChild(aboutPara);

  const hoursHeading = document.createElement("h2");
  hoursHeading.textContent = "Hours";
  contentContainer.appendChild(hoursHeading);

  const hoursList = document.createElement("ul");
  const daysOpen = {
    Monday: "9am - 10pm",
    Tuesday: "9am - 10pm",
    Wednesday: "9am - 10pm",
    Thursday: "9am - 10pm",
    Friday: "9am - 11pm",
    Saturday: "9am - 11pm",
    Sunday: "9am - 11pm",
  };
  for (const day in daysOpen) {
    const dayListItem = document.createElement("li");
    dayListItem.textContent = `${day} : ${daysOpen[day]}`;
    hoursList.appendChild(dayListItem);
  }
  contentContainer.appendChild(hoursList);

  const locationHeading = document.createElement("h2");
  locationHeading.textContent = "Location";
  contentContainer.appendChild(locationHeading);

  const locationPara = document.createElement("p");
  locationPara.textContent = "123 Location Drive, Location, CA, 00000";
  contentContainer.appendChild(locationPara);
}