function returnSmth(param: string | number): unknown {
    return param;
}

console.log(returnSmth('Hello'));
console.log(returnSmth(5));

function getNumber(a: number): void {
    console.log(a);
}

function getString(a: string): void {
    console.log(a);
}

getNumber(returnSmth(5) as number);
getString(returnSmth('Hello') as string);
