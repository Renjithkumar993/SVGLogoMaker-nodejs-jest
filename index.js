console.log("******************************************")
console.log("**********SVG Logo Maker**********")
console.log("******************************************")


const inquirer = require("inquirer");
const fs = require("fs");


const PressToContinuePrompt = require('inquirer-press-to-continue');
const Shape = require("./lib/shapes")

inquirer.registerPrompt('press-to-continue', PressToContinuePrompt);



const questions = {
    sameQuestions: [
        {
            type: "list",
            name: "shape",
            message: "Please specifiy the shape of your logo",
            choices: ["circle", "triangle", "square", "rectangle"]
        },
        {
            type: "input",
            name: "text",
            message: "Enter the 3 digit text you would like to have on the Logo",
            validate: (input) => {
                if (input.length !== 3) {
                    return "Sorry, the logo should have 3 letters";
                }
                return true;
            }

        },
        {
            type: "input",
            name: "color",
            message: "Please specifiy the color or a hexadecimal number of the color you would like to have as text color",
            validate: (input) => {
                if (input.match([/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/])) {
                    return "Ooops, looks like you have typo";
                }
                return true;
            }

        },
        {
            type: "input",
            name: "shapeColor",
            message: "Please specifiy the shape color or a hexadecimal number of the color you would like to have on the shape",
            validate: (input) => {
                if (input.match(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/)) {
                    return "Ooops, looks like you have typo";
                }
                return true;
            }

        }

    ]
    

}








async function callInquirers() {

    const inq1 = await inquirer.prompt(
        {
            name: 'key',
            type: 'press-to-continue',
            enter: true,
            pressToContinueMessage: `'Press Enter key to continue...'\n`,
        });

    const{shape,text,color,shapeColor} = await inquirer.prompt(questions.sameQuestions)


    const newShape= new Shape (shape,text,color,shapeColor)

         newShape.circleWrite(shape)
  }
  
  









callInquirers();





