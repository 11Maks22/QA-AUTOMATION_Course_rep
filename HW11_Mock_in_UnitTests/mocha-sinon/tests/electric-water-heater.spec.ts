import sinon from 'ts-sinon';
import { ElectricWaterHeater } from '../src/electric-water-heater';
import { expect } from 'chai';

describe('ElectricWaterHeater stubbing tests', () => {
    describe('ElectricWaterHeater with object instance', () => {
        const heater = new ElectricWaterHeater(50, '25x25x50');

        const instance  = sinon.stub(heater);

        it('heatWater should heat the water to 50 degrees', () => {
            instance.heatWater();
            expect(instance.currentTemperature).to.be.equal(50);
        });

    });

    describe('ElectricWaterHeater with object stab', () => {
        const instance  = sinon.createStubInstance(ElectricWaterHeater);

        it('heatWater should heat throw th error', () => {
            instance.getDimensions.returns('5x25x50');
            expect(instance.getDimensions()).to.be.equal('5x25x50');
            expect(instance.getDimensions.calledOnce).to.be.true;
        });

    });
});
