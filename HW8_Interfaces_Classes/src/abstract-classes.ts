export abstract class Quadrange {
    public a: number;
    public b: number;
    public c = 0;
    public d = 0;

    public constructor(a: number, b: number, c: number, d: number) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

    public calcPerimeter(): number {
        return this.a + this.b + this.c + this.d;
    }

    public abstract calcSquare(): number;
}

export class Square extends Quadrange {
    public constructor(a: number) {
        super(a, a, a, a);
    }

    public calcSquare(): number {
        return this.a * this.a;
    }
}

export class Rectangle extends Quadrange {
    public constructor(a: number, b: number) {
        super(a, b, a, b);
    }

    public calcSquare(): number {
        return this.a * this.b;
    }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 6);
console.log(square.calcPerimeter());
console.log(square.calcSquare());

function outSide(obj: Quadrange): string {
    return `sides are ${obj.a}, ${obj.b}, ${obj.c}, ${obj.d} with Perimeter ${obj.calcPerimeter} and square ${obj.calcSquare}`;
}

console.log(outSide(square));
console.log(outSide(rectangle));

