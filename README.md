# SVGLogoMaker-nodejs-jest
 This is a Node.js command-line application that allows users to generate simple logos for their projects. Users can select a shape, color, border color and size and text for their logo, and the application will generate an SVG file that can be opened in a web browser.

## Features

* Users can enter up to three characters for the logo text.
* Users can choose from four shapes: circle, triangle, rectangle and square.
* Users can enter color keywords or hexadecimal color codes for the text and shape colors.
* The application generates an SVG file named logo.svg.
* The application displays the message "Generated logo.svg" in the command line upon successful completion.
* The generated SVG file is a 300x200 pixel image that matches the user's selected criteria.

## Usage

* Clone the repository to your local machine.
* Navigate to the root directory of the project in your terminal.
* Run the command node index.js.
* Follow the prompts to enter your desired logo text, shape, and color selections.
* The application will generate an SVG file named logo.svg in the root directory of the project.
* Open the logo.svg file in a web browser to view the generated logo.

Here's a walkthrough video to see how the application works :

![applicationwalkthrough](./examples/appfunction.gif)

## Installation

Before running the application, you must have Node.js installed on your machine.

Clone the repository to your local machine.
Navigate to the root directory of the project in your terminal.
Run the command npm install to install the project dependencies.

## Test

npm test

## License

This project is licensed under the MIT License.