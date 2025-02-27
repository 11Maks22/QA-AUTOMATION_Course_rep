import { Guitar } from './guitar';
import { Violin } from './violin';
import { Drum } from './drum-instrument';
import { performConcert, tuneStringInstrument, hitDrum } from './concert';

const myGuitar = new Guitar();
const myViolin = new Violin();
const myDrum = new Drum();

performConcert(myGuitar);
performConcert(myViolin);
performConcert(myDrum);

tuneStringInstrument(myGuitar);
tuneStringInstrument(myViolin);

hitDrum(myDrum);
