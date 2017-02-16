class Shape {
    side: number;
    constructor(side: number) {
        this.side = side;
    }
}

class Square extends Shape {
    constructor(side: number) { 
        super(side);
    }
    getArea() {
        return this.side * this.side;
    }
}

class Rectangle extends Shape {
    side2: number;
    constructor(side: number, side2: number) {
        super(side);
        this.side2 = side2;
    }
    getArea() {
        return this.side * this.side2;
    }
}

class Triangle extends Shape {
    side2: number;
    side3: number;
    constructor(side: number, side2: number, side3: number) {
        super(side);
        this.side2 = side2;
        this.side3 = side3;
    }
    getArea() {
        let per = (this.side + this.side2 + this.side3) / 2;
        return Math.sqrt(per *(per-this.side) * (per-this.side2) * (per-this.side3));
    }
}

let Squarely = new Square(10);
let Rectang = new Rectangle(5,3);
let Triang = new Triangle(2,3,4);

console.log(Squarely.getArea());
console.log(Rectang.getArea());
console.log(Triang.getArea());