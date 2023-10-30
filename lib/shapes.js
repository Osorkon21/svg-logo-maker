class Logo {
  constructor() {
    this.logoText;
    this.textColor;
    this.shapeColor;
  }

  setLogoText(logoText) {
    this.logoText = logoText;
  }

  setTextColor(color) {
    this.textColor = color;
  }

  setShapeColor(color) {
    this.shapeColor = color;
  }

  genSVG(response) {
    this.setLogoText(response.logoText);
    this.setTextColor(response.textColor);
    this.setShapeColor(response.shapeColor);
    return this.render();
  }
}

class Circle extends Logo {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="90" fill="${this.shapeColor}" />

    <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>

    </svg>
    `;
  }
}

class Triangle extends Logo {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="150, 10 290, 190 10, 190" fill="${this.shapeColor}"/>

    <text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>

    </svg>`;
  }
}

class Square extends Logo {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <rect x="65" y="15" width="170" height="170" fill="${this.shapeColor}"/>

    <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>

    </svg>`;
  }
}

module.exports = {
  Circle,
  Triangle,
  Square
};
