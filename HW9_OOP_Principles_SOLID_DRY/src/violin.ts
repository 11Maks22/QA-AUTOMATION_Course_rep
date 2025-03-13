import { StringedInstrument } from './string-instrument';

export class Violin extends StringedInstrument {
    public constructor() {
        super('Скрипка', 4);
    }

    public play(): void {
        console.log('Скрипка грає мелодію...');
    }
}
