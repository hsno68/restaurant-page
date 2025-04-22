export default class ElementBuilder {
  constructor(type) {
    this.element = document.createElement(type);
  }

  text(content) {
    this.element.textContent = content;
    return this;
  }

  html(content) {
    this.element.innerHTML = content;
    return this;
  }

  child(child) {
    this.element.appendChild(child);
    return this;
  }

  build() {
    return this.element;
  }
}

export const contentContainer = document.querySelector("div#content-container");