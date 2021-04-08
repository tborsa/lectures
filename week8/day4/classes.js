


// encapsulate and represent real world concepts
// properties/characteristics behaviour/actions

// class (blueprint) for an idea
// class for cups 
    // capacity
    // color
    //material
    //handle type

// class -> object (instance of the class) specific cup
    // 20 flo
    // grey
    // ceramic
    // standard

class Shape {
    constructor(sides) { // run once when we use the class to create an object
        this.sides = sides;
    }

    area() {
        console.log('no area set');
    }
};

class Square extends Shape {
    constructor(sideLength) {
        super(4);
        this.sideLength = sideLength;
    }

    // what is this here
    area = () => { // bind this contextually
        super.area();
        return this.sideLength * this.sideLength;
    }
}

let rectangle = new Square(10); //objects

console.log(rectangle.area);
console.log(rectangle.area());

let copyAreaRef = rectangle.area;

console.log(copyAreaRef);
console.log(copyAreaRef());

