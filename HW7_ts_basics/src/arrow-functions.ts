// const sumElements = (numbers: number[]): number => numbers.reduce((sum, num) => sum + num, 0);
import { sumElements} from './functions';

const myArr = [1, 5, 8, 8];
const result = sumElements(myArr);
console.log(result);

// Альтернативна версія функції sumArray, яка підтримує масиви змішаних типів (number | string).
// Використовує фільтрацію для відкидання рядкових значень перед додаванням.
// Можна використовувати, якщо потрібно обробляти масиви зі змішаними типами.
// const sumArray = (numbers: (number | string)[]): number =>
//     numbers
//         .filter((num): num is number => typeof num === 'number')
//         .reduce((sum, num) => sum + num, 0);
function sumArray(numbers: (number | string)[]): number {
    return numbers
        .map(num => typeof num === 'string' ? num.length : num) // Перетворюємо рядки на їх довжину
        .reduce((sum, num) => sum + num, 0);
}

const stringArr = ['Gendalph', 'Aragorn', 'Arven'];
const numberArr = [2, 4, 6, 8];

const resultNumbers: number = sumArray(numberArr);
console.log(resultNumbers);

const resultStrings: number = sumArray(stringArr);
console.log(resultStrings);
