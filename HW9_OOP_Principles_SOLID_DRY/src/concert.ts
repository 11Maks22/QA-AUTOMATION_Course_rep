import { StringInstrument, MusicalInstrument } from './string-instrument';

export function performConcert(instrument: StringInstrument & MusicalInstrument): void {
    instrument.tune();
    instrument.play();
}
