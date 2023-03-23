const { Circle, Triangle, Rectangle, Square } = require("./shapes")




describe('Circle',() =>{
    describe('addproperties',() => {
     it("when render should add the color, text,fontfamily,bordercolor,size and the shapecolor to svg write",() => {
      const circle = new Circle();
      circle.setColor("blue");
      circle.setText("Ren");
      circle.setfontfamily("fantasy")
      circle.setboarderColor("black");
      circle.setborderSize("5")
      circle.setshapeColor("yellow")
    expect(circle.render()).toEqual(
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" style = "fill:yellow;stroke:black;stroke-width:5" />
    <text x="150" y="125" font-size="60" font-family="fantasy" text-anchor="middle" fill="blue">Ren</text>
    </svg>`)

     })
    })
})

describe('Triangle',() =>{
    describe('addproperties',() => {
     it("when render should add the color, text,fontfamily,bordercolor,size and the shapecolor to svg write",() => {
      const triangle = new Triangle();
      triangle.setColor("blue");
      triangle.setText("Ren");
      triangle.setfontfamily("fantasy")
      triangle.setboarderColor("black");
      triangle.setborderSize("5")
      triangle.setshapeColor("yellow")
    expect(triangle.render()).toEqual(
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points ="150,50 50,150 250,150" style = "fill:yellow;stroke:black;stroke-width:5"  />
    <text x="150" y="130" font-size="60"  font-family="fantasy" text-anchor="middle" fill="blue">Ren</text>
    </svg>`)

     })
    })
})

describe('Rectangle',() =>{
    describe('setColor',() => {
     it("when render should add the color, text,fontfamily,bordercolor,size and the shapecolor to svg write",() => {
      const rectangle = new Rectangle();
      rectangle.setColor("blue");
      rectangle.setText("Ren");
      rectangle.setfontfamily("fantasy")
      rectangle.setboarderColor("black");
      rectangle.setborderSize("5")
      rectangle.setshapeColor("yellow")
    expect(rectangle.render()).toEqual(
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="100" style = "fill:yellow;stroke:black;stroke-width:5" />
    <text x="150" y="75" font-size="60" font-family="fantasy" text-anchor="middle" fill="blue">Ren</text>
    </svg>`)

     })
    })
})


describe('Square',() =>{
    describe('setColor',() => {
     it("when render should add the color, text,fontfamily,bordercolor,size and the shapecolor to svg write",() => {
      const square  = new Square ();
      square.setColor("blue");
      square.setText("Ren");
      square.setfontfamily("fantasy")
      square.setboarderColor("black");
      square.setborderSize("5")
      square.setshapeColor("yellow")
    expect(square.render()).toEqual(
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" style = "fill:yellow;stroke:black;stroke-width:5"  />
    <text x="100" y="100" font-size="60" font-family="fantasy" text-anchor="middle" fill="blue">Ren</text>
    </svg>`)

     })
    })
})