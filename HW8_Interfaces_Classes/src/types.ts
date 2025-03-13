/* eslint-disable @typescript-eslint/consistent-type-definitions */
export type Person = {
    firstName: string;
    lastName: string;
    yearOfBirth: number;
};
/* eslint-enable @typescript-eslint/consistent-type-definitions */

const person: Partial<Person> = {};

person.firstName = 'John';
person.lastName = 'Doe';
person.yearOfBirth = 1990;

console.log(person);

type State = 'loaded' | 'loading' | 'error';
let state: State;
state = 'loading';
state = 'loaded';

const state2 = 'error' as State;

console.log(state, state2);

type inputArrays = string[] | number[];
type inputArray = (string | number)[];
// type inputArray = inputArray & (string | number[]); //error

const input1: inputArrays = ['a', 'b', 'c'];
const input2: inputArray = ['a', 'b', 'c', 5];

console.log(input1, input2);
