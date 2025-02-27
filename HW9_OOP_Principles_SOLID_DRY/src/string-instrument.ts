import { MusicalInstrument } from './musical-instrument';

export abstract class StringedInstrument extends MusicalInstrument {
    public constructor(name: string, public numberOfStrings: number) {
        super(name);
    }

    public tune(): void {
        console.log(`${this.name} налаштовується...`);
    }
}
