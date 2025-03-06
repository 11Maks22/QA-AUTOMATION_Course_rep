import { expect } from 'chai';
import { describe, it, beforeEach, afterEach } from 'mocha';
import sinon from 'sinon';
import { Guitar } from '../src/guitar';
import { Violin } from '../src/violin';
import { Drum } from '../src/drum-instrument';
import { performConcert, tuneStringInstrument, hitDrum } from '../src/concert';

describe('Mocha Mock Tests - Class Example', () => {
    let consoleSpy: sinon.SinonSpy;

    beforeEach(() => {
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        consoleSpy.restore();
    });

    it('should call play() on Guitar', () => {
        const guitar = new Guitar();
        const playSpy = sinon.spy(guitar, 'play');
        guitar.play();
        expect(playSpy.calledOnce).to.be.true;
    });

    it('should call tune() on Violin', () => {
        const violin = new Violin();
        const tuneSpy = sinon.spy(violin, 'tune');
        violin.tune();
        expect(tuneSpy.calledOnce).to.be.true;
    });

    it('should call hit() on Drum', () => {
        const drum = new Drum();
        const hitSpy = sinon.spy(drum, 'hit');
        drum.hit();
        expect(hitSpy.calledOnce).to.be.true;
    });

    it('should call performConcert() and trigger play()', () => {
        const guitar = new Guitar();
        const playSpy = sinon.spy(guitar, 'play');
        performConcert(guitar);
        expect(playSpy.calledOnce).to.be.true;
    });

    it('should call tuneStringInstrument() and trigger tune()', () => {
        const violin = new Violin();
        const tuneSpy = sinon.spy(violin, 'tune');
        tuneStringInstrument(violin);
        expect(tuneSpy.calledOnce).to.be.true;
    });

    it('should call hitDrum() and trigger hit()', () => {
        const drum = new Drum();
        const hitSpy = sinon.spy(drum, 'hit');
        hitDrum(drum);
        expect(hitSpy.calledOnce).to.be.true;
    });
});
