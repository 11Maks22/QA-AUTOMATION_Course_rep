export abstract class StaticClass {
    private static _e = 5;
    public static get e(): number {
        return this._e;
    }

    public static readonly a = 5;
    public static b = 10;

    public static calcPerimeter(c: number, d: number): number {
        return this.a + this.b + c + d;
    }
}

console.log(StaticClass.calcPerimeter(15, 20));
// StaticClass.a = 100;
// console.log(StaticClass.calcPerimeter(15, 20));

export class NotAStaticClass {
    public static readonly a = 5;
    public b = 10;

    public constructor(b: number) {
        this.b = b;
    }

    public calcPerimeter(c: number, d: number): number {
        return NotAStaticClass.a + this.b + c + d;
    }
}

const obj = new NotAStaticClass(20);
console.log(obj.calcPerimeter(15, 20));
