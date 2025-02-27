import { MusicalInstrument } from './musical-instrument';
import { StringedInstrument } from './string-instrument';
import { DrumInstrument } from './drum-instrument';

export function performConcert(instrument: MusicalInstrument): void {
    instrument.play();
}

export function tuneStringInstrument(instrument: StringedInstrument): void {
    instrument.tune();
}

export function hitDrum(instrument: DrumInstrument): void {
    instrument.hit();
}
