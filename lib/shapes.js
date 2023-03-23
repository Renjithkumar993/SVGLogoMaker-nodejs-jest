
const fs = require("fs");
const { default: bottomBar } = require("inquirer/lib/ui/bottom-bar");
const { right } = require("inquirer/lib/utils/readline");
const { waitForDebugger } = require("inspector");




class Circle {
    constructor(text, color, shapeColor, fontfamily, borderColor,bordersize) {
        this.text = text;
        this.color = color;
        this.shapeColor = shapeColor;
        this.fontfamily = fontfamily;
        this.borderColor = borderColor;
        this.bordersize = bordersize;
    }

    setColor(color){
        return this.color = color
    }
    setText(text){
        return this.text = text
    }
    setshapeColor(shapeColor){
        return this.shapeColor =shapeColor
    }
    setfontfamily(fontfamily){
        return this.fontfamily = fontfamily
    }
    setboarderColor(borderColor){
        return this.borderColor = borderColor
    }
    setborderSize (bordersize){
        return this.bordersize = bordersize
    }
 
    render() {
        const circle =
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" style = "fill:${this.shapeColor};stroke:${this.borderColor};stroke-width:${this.bordersize}" />
    <text x="150" y="125" font-size="60" font-family="${this.fontfamily}" text-anchor="middle" fill="${this.color}">${this.text}</text>
    </svg>`
  return circle;

    }
   
}
    
   



class Triangle extends Circle {
    constructor(text, color, shapeColor, fontfamily,borderColor,bordersize){
       super(text, color, shapeColor, fontfamily,borderColor,bordersize)
       
    }

    render(){
        const triangle =
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points ="150,50 50,150 250,150" style = "fill:yellow;stroke:black;stroke-width:5"  />
    <text x="150" y="130" font-size="60"  font-family="fantasy" text-anchor="middle" fill="blue">Ren</text>
    </svg>`
return triangle;
    }
}


class Square extends Circle {
    constructor(text, color, shapeColor, fontfamily,borderColor,bordersize){
        super(text, color, shapeColor, fontfamily,borderColor,bordersize)
     }

    render(){
        const square =
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" style = "fill:${this.shapeColor};stroke:${this.borderColor};stroke-width:${this.bordersize}"  />
    <text x="100" y="100" font-size="60" font-family="${this.fontfamily}" text-anchor="middle" fill="${this.color}">${this.text}</text>
    </svg>`
return square;
    }
}


class Rectangle extends Circle{
    constructor(text, color, shapeColor, fontfamily,borderColor,bordersize){
        super(text, color, shapeColor, fontfamily,borderColor,bordersize)
     }

render(){
    const rectangle =
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="100" style = "fill:${this.shapeColor};stroke:${this.borderColor};stroke-width:${this.bordersize}" />
    <text x="150" y="75" font-size="60" font-family="${this.fontfamily}" text-anchor="middle" fill="${this.color}">${this.text}</text>
    </svg>`
return rectangle;
}    

}


Circle.prototype.printToSvg = function(){
svgData = this.render();

fs.writeFile("logo.svg", svgData, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("******************************************")
        console.log(`Logo ${this.text} generated successfully!`);
        console.log("******************************************")
    }

})
}



module.exports = {Circle,Triangle,Rectangle,Square};


