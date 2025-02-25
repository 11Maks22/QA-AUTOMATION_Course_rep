import { Guitar } from './guitar';
import { Violin } from './violin';
import { performConcert } from './concert';

const myGuitar = new Guitar();
const myViolin = new Violin();

performConcert(myGuitar);
performConcert(myViolin);
