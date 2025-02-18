/* eslint-disable unicorn/filename-case */
// const sumElements = (numbers: number[]): number => numbers.reduce((sum, num) => sum + num, 0);

import { sumElements, sumArray } from './functions';

const myArr: number[] = [1, 5, 8, 8];
const result: number = sumElements(myArr);
console.log(result);

// const sumArray = (numbers: (number | string)[]): number =>
//     numbers
//         .filter((num): num is number => typeof num === 'number')
//         .reduce((sum, num) => sum + num, 0);

const stringArr: string[] = ['Gendalph', 'Aragorn', 'Arven'];
const numberArr: number[] = [2, 4, 6, 8];

const resultNumbers: number = sumArray(numberArr);
console.log(resultNumbers);

const resultStrings: number = sumArray(stringArr);
console.log(resultStrings);
