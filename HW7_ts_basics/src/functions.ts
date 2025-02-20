export const sumElements = (numbers: number[]): number =>
    numbers.reduce((sum, num) => sum + num, 0);

const myArr = [1, 5, 8, 8];
const result = sumElements(myArr);
console.log(result);

export const sumArray = (numbers: number[]): number =>
    numbers.reduce((sum, num) => sum + num, 0);

// const stringArr = ['Gimli', 'Legolas', 'Frodo']; - не використовується
const numberArr = [2, 4, 6, 8];

const resultNumbers = sumArray(numberArr);
console.log(resultNumbers);
