import { expect } from 'chai';
import { describe, it } from 'mocha';
import { Guitar } from '../src/guitar';
import { Violin } from '../src/violin';
import { Drum } from '../src/drum-instrument';
import { performConcert, tuneStringInstrument, hitDrum } from '../src/concert';

// UNIT-тести для функцій

describe('Unit Test - Musical Functions', () => {
    it('should perform a concert with a Guitar', () => {
        const guitar = new Guitar();
        expect(() => performConcert(guitar)).to.not.throw();
    });

    it('should perform a concert with a Violin', () => {
        const violin = new Violin();
        expect(() => performConcert(violin)).to.not.throw();
    });

    it('should perform a concert with a Drum', () => {
        const drum = new Drum();
        expect(() => performConcert(drum)).to.not.throw();
    });

    it('should tune a string instrument', () => {
        const violin = new Violin();
        expect(() => tuneStringInstrument(violin)).to.not.throw();
    });

    it('should hit a drum', () => {
        const drum = new Drum();
        expect(() => hitDrum(drum)).to.not.throw();
    });
});
