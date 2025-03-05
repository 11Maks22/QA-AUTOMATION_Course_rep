import { StringedInstrument } from './string-instrument';

export class Guitar extends StringedInstrument {
    public constructor() {
        super('Гітара', 6);
    }

    public play(): void {
        console.log('Гітара грає акорди...');
    }
}
