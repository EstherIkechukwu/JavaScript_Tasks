const Shape = require('./shape');

class Rectangle extends Shape{
    #side1;
    #side2;

    constructor(name, side1, side2){
        super(name);
        this.#side1 = side1;
        this.#side2 = side2;
    }

    getArea(){
        return this.#side1 * this.#side2;
    }

    isSquare(){
        return (this.#side1 === this.#side2);    
    }
}

let rectangle = new Rectangle("rectangle", 4, 4);
console.log(rectangle.getArea());
console.log(rectangle.getName());
console.log(rectangle.isSquare());