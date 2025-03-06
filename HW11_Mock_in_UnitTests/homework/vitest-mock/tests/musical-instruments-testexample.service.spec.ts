import { describe, it, expect, vi } from 'vitest';
import { performConcert, tuneStringInstrument, hitDrum } from '../src/concert';
import { Guitar } from '../src/guitar';
import { Violin } from '../src/violin';
import { Drum } from '../src/drum-instrument';

describe('Vitest Mock Tests', () => {
    it('should mock play method on Guitar', () => {
        const guitar = new Guitar();
        const playMock = vi.spyOn(guitar, 'play');

        guitar.play();
        expect(playMock).toHaveBeenCalled();
    });

    it('should mock tune method on Violin', () => {
        const violin = new Violin();
        const tuneMock = vi.spyOn(violin, 'tune');

        violin.tune();
        expect(tuneMock).toHaveBeenCalled();
    });

    it('should mock hit method on Drum', () => {
        const drum = new Drum();
        const hitMock = vi.spyOn(drum, 'hit');

        drum.hit();
        expect(hitMock).toHaveBeenCalled();
    });

    it('should call performConcert and trigger play()', () => {
        const guitar = new Guitar();
        const playMock = vi.spyOn(guitar, 'play');

        performConcert(guitar);
        expect(playMock).toHaveBeenCalled();
    });

    it('should call tuneStringInstrument and trigger tune()', () => {
        const violin = new Violin();
        const tuneMock = vi.spyOn(violin, 'tune');

        tuneStringInstrument(violin);
        expect(tuneMock).toHaveBeenCalled();
    });

    it('should call hitDrum and trigger hit()', () => {
        const drum = new Drum();
        const hitMock = vi.spyOn(drum, 'hit');

        hitDrum(drum);

        expect(hitMock).toHaveBeenCalled();
    });
});
