export interface IHeater {
    thermalSensorIn: number;
    thermalSensorOut: number;
    energySource: string;

    heatWater(): void;
    heatCustomWater(temperature: number): void;
}
