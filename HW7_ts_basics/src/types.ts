export const obj = {
    a: 1,
    b: 'Hello'
};

export const obj2: Record<string, number | string> = {};
obj2.a = 1;
obj2.b = 'some string';
obj2.c = 3;

export const num = 1;
export let num2: number;
num2 = 2;
num2 = 3;

export let str = 'Hello';
str = 'World';

export const arr = [1, 2, 3];

export enum Direction {
    Up = 100,
    Down = '101',
    Left = 200,
    Right
}

export const context: Record<string, Direction> = {
    up: Direction.Up
};
