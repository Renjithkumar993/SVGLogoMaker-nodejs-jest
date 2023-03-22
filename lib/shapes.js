
const fs = require("fs")



class Shape {
    constructor(shape, text, color, shapeColor) {
        this.text = text;
        this.color = color;
        this.shapeColor = shapeColor;
        this.shape = shape;
    }


    circleWrite = (shape) => {


        const circleData =
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
      
      </svg>`

        const rectangleData =
            `  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
     <rect width="300" height="100" style="fill:${this.shapeColor}" />
     
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
      
     </svg>
     `
     const squareData =
     `  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
     <rect width="200" height="200" style="fill:${this.shapeColor}" />
     
     <text x="100" y="100" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
      
     </svg>`
 
     const triangleData =
     `  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
     <polygon points ="150,50 50,150 250,150" style="fill:${this.shapeColor}" />
     
     <text x="140" y="70" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
      
     </svg>`




        switch (shape) {
            case "circle": var writeFileData = circleData;
                return writting();
            case "triangle": var writeFileData = triangleData;
                return writting();
            case "rectangle": var writeFileData = rectangleData;
                return writting();
            case "square" : var writeFileData = squareData
            return writting();    
        }


        function writting() {
            fs.writeFile("logo.svg", writeFileData, (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log("******************************************")
                    console.log(`Logo generated successfully!`);
                    console.log("******************************************")
                }
            });

        }
    }



}











module.exports = Shape;