import { expect as expectChai } from 'chai';
import { beforeAll, expect } from '@jest/globals';

describe('Jest first test suite', () => {
    let sum: number;
    beforeAll(() => {
        sum = 5;
    });

    beforeEach(() => {
        sum = 6;
    });

    describe('Jest first test', () => {
        it('2 + 2 = 4', () => {
            expect(2 + 2).toBe(4);
        });
    });

    describe('Jest second test, 2 + 2 = 5', () => {
        beforeEach(() => {
            sum = 7;
        });
        it('1. put result of 2 + 2 into variable', () => {
            sum = 2 + 2;
        });

        it('2. check variable to be 5', () => {
            expectChai(sum).to.be.equal(5);
        });

        it('3. final test case', () => {
            console.log('test');
        });
    });
});
