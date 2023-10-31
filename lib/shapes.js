// parent Logo class
class Logo {
  constructor(logoText, textColor, shapeColor) {

    // create class properties, assign values to them
    this.logoText = logoText;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

// circle class, child of Logo
class Circle extends Logo {
  constructor(logoText, textColor, shapeColor) {

    // call Logo constructor
    super(logoText, textColor, shapeColor);
  }

  // generate circle-specific SVG
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="90" fill="${this.shapeColor}" />

    <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>

    </svg>
    `;
  }
}

// triangle class, child of Logo
class Triangle extends Logo {
  constructor(logoText, textColor, shapeColor) {

    // call Logo constructor
    super(logoText, textColor, shapeColor);
  }

  // generate triangle-specific SVG
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="150, 10 290, 190 10, 190" fill="${this.shapeColor}"/>

    <text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>

    </svg>`;
  }
}

// square class, child of Logo
class Square extends Logo {
  constructor(logoText, textColor, shapeColor) {

    // call Logo constructor
    super(logoText, textColor, shapeColor);
  }

  // generate square-specific SVG
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <rect x="65" y="15" width="170" height="170" fill="${this.shapeColor}"/>

    <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>

    </svg>`;
  }
}

// export all child classes
module.exports = {
  Circle,
  Triangle,
  Square
};
