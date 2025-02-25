import { MusicalInstrument } from './musical-instrument';

export interface StringInstrument {
    numberOfStrings: number;
    tune(): void;
}

export abstract class StringedInstrument extends MusicalInstrument implements StringInstrument {
    public constructor(name: string, public numberOfStrings: number) {
        super(name);
    }

    public tune(): void {
        console.log(`${this.name} налаштовується...`);
    }
}
export { MusicalInstrument };
