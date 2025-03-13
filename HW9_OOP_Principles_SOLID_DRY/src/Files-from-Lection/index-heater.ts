import { ElectricWaterHeater } from './electric-water-heater';
import { GasWaterHeater } from './gas-water-heater';
import { IHeater } from './iheater';
import { IHeaterBox } from './iheater-box';
import { MomentumElectricWaterHeater } from '../momentum-electric-water-heater';

const boiler = new ElectricWaterHeater(50, '25x25x50');

boiler.heatWater();

console.log('Current temperature is: ' + boiler.currentTemperature);

function heatCustomWater(heater: IHeater): void {
    heater.heatCustomWater(80);
}

const gasHeater = new GasWaterHeater(40, '40x40x80');

heatCustomWater(boiler);
console.log('Custom water temp in boiler is: ' + boiler.currentTemperature);

heatCustomWater(gasHeater);
console.log('Custom water temp in gas boiler is: ' + gasHeater.currentTemperature);

const momentumBoiler = new MomentumElectricWaterHeater(40, '40x45x70');
console.log(momentumBoiler.getMomentumEnergyUsage());

heatCustomWater(momentumBoiler);
console.log('Custom water temp in gas boiler is: ' + momentumBoiler.currentTemperature);

//ISP

function getHeaterDimensions(heater: IHeaterBox): void {
    console.log(heater.getDimensions());
}

getHeaterDimensions(boiler);
getHeaterDimensions(gasHeater);
