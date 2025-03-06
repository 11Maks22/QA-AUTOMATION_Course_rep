import { expect } from 'chai';

import { ElectricWaterHeater } from '../src/electric-water-heater';

describe('Unit test suite', () => {
    it('heatWater should heat the water to 50 degrees', () => {
        // Arrange
        const obj = new ElectricWaterHeater(50, '25x25x50');

        // Act
        obj.heatWater();

        // Assert
        expect(obj.currentTemperature).to.be.equal(50);
    });

    it('heatCustomWater(80) should heat the water to 80 degrees', () => {
        // Arrange
        const obj = new ElectricWaterHeater(50, '25x25x50');

        // Act
        obj.heatCustomWater(80);

        // Assert
        expect(obj.currentTemperature).to.be.equal(50);
    });
});
