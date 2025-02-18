// function sumElements(numbers: number[]): number {
//     return numbers.reduce((sum, num) => sum + num, 0);
// }
export const sumElements = (numbers: number[]): number => numbers.reduce((sum, num) => sum + num, 0);
const myArr: number[] = [1, 5, 8, 8];
const result: number = sumElements(myArr);

console.log(result);

export const sumArray = (numbers: (number | string)[]): number =>
    numbers
        .filter((num): num is number => typeof num === 'number')
        .reduce((sum, num) => sum + num, 0);
// function sumArray(numbers: (number | string)[]): number {
//     return numbers
//         .filter((num): num is number => typeof num === 'number')
//         .reduce((sum, num) => sum + num, 0);
// }

const stringArr: string[] = ['Gimli', 'Legolas', 'Frodo'];
const numberArr: number[] = [2, 4, 6, 8];

const resultNumbers: number = sumArray(numberArr);
console.log(resultNumbers);

const resultStrings: number = sumArray(stringArr);
console.log(resultStrings);

