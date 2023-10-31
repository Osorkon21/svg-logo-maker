// import inquirer, node filesystem, and shapes.js 
const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");

// questions for the command-line prompts
const questions = [
  {
    type: "input",
    message: "Enter your logo's text. You may use up to three characters.",
    name: "logoText",

    // ensures user does not enter more than three characters
    validate: (input) => input.length <= 3 ? true : "Three characters max - try again."
  },
  {
    type: "input",
    message: "Enter your logo's text color. Use CSS color keywords or a hexadecimal number.",
    name: "textColor"
  },
  {
    type: "list",
    message: "Choose a shape for your logo.",
    name: "shape",
    choices: [
      {
        name: "Circle",
        value: 0
      },
      {
        name: "Triangle",
        value: 1
      },
      {
        name: "Square",
        value: 2
      }
    ]
  },
  {
    type: "input",
    message: "Enter your logo's shape color. Use CSS color keywords or a hexadecimal number.",
    name: "shapeColor"
  }
];

// creates new logo.svg file in the output folder and writes its contents
function writeSVG(contents) {
  fs.writeFile("./output/logo.svg", contents, (err) => err ? console.error(err) : console.log("Generated logo.svg!"));
}

// generates SVG based on what shape the user chooses
function genSVG(response) {
  if (response.shape === 0) {
    const circle = new Circle(response.logoText, response.textColor, response.shapeColor);
    return circle.render();
  }
  else if (response.shape === 1) {
    const triangle = new Triangle(response.logoText, response.textColor, response.shapeColor);
    return triangle.render();
  }
  else {
    const square = new Square(response.logoText, response.textColor, response.shapeColor);
    return square.render();
  }
}

// prompts the user for input, generates SVG based on that input, and writes SVG to a new logo.svg file in the output folder
async function init() {
  const response = await inquirer.prompt(questions);
  const content = genSVG(response);

  writeSVG(content);
}

// function called when index.js is run
init();
