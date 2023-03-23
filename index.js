console.log("******************************************")
console.log("**********SVG Logo Maker**********")
console.log("******************************************")


const inquirer = require("inquirer");
const fs = require("fs");


const PressToContinuePrompt = require('inquirer-press-to-continue');
const { Circle, Triangle, Rectangle, Square } = require("./lib/shapes")




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

    ],
    additionalQuestions: [
        {
            type: "confirm",
            name: "addstyleconfirm",
            message: "would you like to add some styling to your logo"
        }

    ],

    styleQuestions: [
        {
            type: "list",
            name: "fontfamily",
            message: "please choose font -family from the list",
            choices: ["Arial", "Verdana", "fantasy", "monospace"]
        },

        {
            type: "input",
            name: "borderColor",
            messge: "please choose the border color",

        },

        {
            type: "list",
            name: "bordersize",
            message: "please choose boarder radius",
            choices: ["1", "2", "3", "4", "5"]
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

    const { shape, text, color, shapeColor, } = await inquirer.prompt(questions.sameQuestions)



    const newQuestions = await inquirer.prompt(questions.additionalQuestions);

    let data = {};
    if (newQuestions.addstyleconfirm == true) {

        data = await inquirer.prompt(questions.styleQuestions);
        writeSvg();
    } else {
        return writeSvg()
    }

    async function writeSvg() {
        const {fontfamily, borderColor, bordersize } = data;
        switch (shape) {
            case "circle": const newCircle = new Circle(text, color, shapeColor, fontfamily, borderColor, bordersize)
                await newCircle.printToSvg();
                break;
            case "triangle": const newTriangle = new Triangle(text, color, shapeColor, fontfamily, borderColor, bordersize)
                await newTriangle.printToSvg();
                break;
            case "rectangle": const newRectangle = new Rectangle(text, color, shapeColor, fontfamily, borderColor, bordersize)
                await newRectangle.printToSvg();
                break;
            case "square": const newSquare = new Square(text, color, shapeColor, fontfamily, borderColor, bordersize)
                await newSquare.printToSvg();
                break;
        }
    }

}

callInquirers();





