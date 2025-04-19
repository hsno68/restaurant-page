export default function pageLoad() {
  const contentContainer = document.querySelector("div#content-container");

  const pageContent = [
    {
      h1: "Tahm Kench's Bar and Grill",
    },
    {
      h2: "About",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo ipsum, dictum ac orci eu, tempor posuere odio. Etiam luctus, urna vitae iaculis iaculis, magna neque aliquet lorem, quis mattis nibh libero et ex. Cras varius vel tortor sit amet ullamcorper. Ut non tortor lacus. Fusce id dui sed urna facilisis sollicitudin. Quisque iaculis, odio ac egestas varius, sem orci maximus felis, a convallis orci lectus quis libero. Sed non porttitor lorem, vitae luctus mauris."
    },
  ];

  pageContent.forEach((content) => {
    const subContainer = document.createElement("div");
    for (const HTMLtag in content) {
      const htmlElement = document.createElement(HTMLtag);
      htmlElement.textContent = content[HTMLtag];
      subContainer.appendChild(htmlElement);
    }
    subContainer.classList.add("subContainer");
    contentContainer.appendChild(subContainer);
  });
}