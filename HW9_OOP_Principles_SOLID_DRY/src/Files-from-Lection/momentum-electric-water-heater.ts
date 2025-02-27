import { ElectricWaterHeater } from './electric-water-heater';

export class MomentumElectricWaterHeater extends ElectricWaterHeater {
    public constructor(temp: number, size: string) {
        super(temp, size);
    }

    public getMomentumEnergyUsage(): string {
        return '2 kW';
    }
}
