// import inquirer, node filesystem, and shapes.js 
const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./lib/shapes");

// questions for the command-line prompts
const questions = [
  {
    type: "input",
    message: "Enter your logo's text. You may use up to three characters.",
    name: "logoText",
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

function genSVG(response) {
  if (response.shape === 0) {
    const circle = new shapes.Circle();
    return circle.genSVG(response);
  }
  else if (response.shape === 1)
    return shapes.Triangle.genSVG(response);
  else
    return shapes.Square.genSVG(response);
}

// prompts the user for input, generates SVG based on that input, and writes SVG to a new logo.svg file in the output folder
async function init() {
  const response = await inquirer.prompt(questions);
  const content = genSVG(response);

  writeSVG(content);
}

// function called when index.js is run
init();
