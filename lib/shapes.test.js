// test render function that writes the SVG (Circle, Triangle, Square)

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

  // // specific test
  // describe("Test of the sum method", () => {

  //   // what does a successful test look like?
  //   it("should correctly add two numbers together", () => {

  //     // arrange step
  //     const num1 = 10;
  //     const num2 = 20;
  //     const total = num1 + num2;

  //     // act step
  //     const arithmetic = new Arithmetic();
  //     const result = arithmetic.sum(num1, num2);

  //     // assert step, toEqual function is built into the Jest package
  //     expect(result).toEqual(total);
  //   });
  // });
});
