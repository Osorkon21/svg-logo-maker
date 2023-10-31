// import classes from shapes.js
const { Circle, Triangle, Square } = require('../lib/shapes');

// what are we testing, big picture
describe("Logo Construction Tests", () => {

  // class instantiation tests
  describe('Instantiation Tests', () => {

    // Circle instantiation test
    it('should be an instance of Circle class', () => {
      const circle = new Circle();
      expect(circle).toBeInstanceOf(Circle);
    });

    // Triangle instantiation test
    it('should be an instance of Triangle class', () => {
      const triangle = new Triangle();
      expect(triangle).toBeInstanceOf(Triangle);
    });

    // Square instantiation test
    it('should be an instance of Square class', () => {
      const square = new Square();
      expect(square).toBeInstanceOf(Square);
    });
  });

  // render() tests
  describe("Tests of the render method", () => {

    // Circle render() test
    it("should generate identical Circle SVG", () => {

      // correct Circle SVG
      const circleSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="90" fill="blue"/>

    <text x="150" y="120" font-size="60" text-anchor="middle" fill="red">SVG</text>

    </svg>
    `;

      // create new Circle, call render()
      const circle = new Circle("SVG", "red", "blue");
      const generatedSVG = circle.render();

      // generatedSVG and circleSVG are expected to match
      expect(generatedSVG).toEqual(circleSVG);
    });

    // Triangle render() test
    it("should generate identical Triangle SVG", () => {

      // correct Triangle SVG
      const triangleSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="150, 10 290, 190 10, 190" fill="green"/>

    <text x="150" y="160" font-size="60" text-anchor="middle" fill="#ffffff">WWW</text>

    </svg>`;

      // create new Triangle, call render()
      const triangle = new Triangle("WWW", "#ffffff", "green");
      const generatedSVG = triangle.render();

      // generatedSVG and triangleSVG are expected to match
      expect(generatedSVG).toEqual(triangleSVG);
    });

    // Square render() test
    it("should generate identical Square SVG", () => {

      // correct Square SVG
      const squareSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <rect x="65" y="15" width="170" height="170" fill="yellow"/>

    <text x="150" y="120" font-size="60" text-anchor="middle" fill="blue">ASD</text>

    </svg>`;

      // create new Square, call render()
      const square = new Square("ASD", "blue", "yellow");
      const generatedSVG = square.render();

      // generatedSVG and squareSVG are expected to match
      expect(generatedSVG).toEqual(squareSVG);
    });
  });
});
