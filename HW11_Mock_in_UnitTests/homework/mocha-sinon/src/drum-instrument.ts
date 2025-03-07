import { MusicalInstrument } from './musical-instrument';

export interface DrumInstrument {
    hit(): void;
}

export class Drum extends MusicalInstrument implements DrumInstrument {
    public constructor() {
        super('Барабан');
    }

    public hit(): void {
        console.log('Барабан видає ритм...');
    }

    public play(): void {
        console.log('Барабан грає партію ударних...');
    }

    public stop(): void {
        console.log('Барабан зупиняє свй ритм...');
    }
}
