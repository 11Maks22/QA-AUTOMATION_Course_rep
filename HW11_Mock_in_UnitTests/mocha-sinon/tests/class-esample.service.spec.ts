import { DbConnectionExample } from 'src/db-connection-example';
import { ClassExample } from '../src/class-example';
import sinon from 'ts-sinon';
import { DbQueryProcessorServiceExample } from '../src/db-query-processor-service-example';
import { expect } from 'chai';

describe('DbQueryProcessorServiceExample tests', () => {
    afterEach(() => {
        // to restore calling statistics
        mockedDbConnection.findOlderThen.resetHistory();
    });

    const mockedDbConnection = sinon.createStubInstance(DbConnectionExample);
    const olderThen30: ClassExample[] = [
        {
            name: 'John',
            age: 30
        },
        {
            name: 'Jane',
            age: 31
        }
    ] as ClassExample[];

    mockedDbConnection.findOlderThen.returns(olderThen30);

    const service = new DbQueryProcessorServiceExample(mockedDbConnection);

    describe('findOlderThen return data', () => {
        it('findOlderThen should return data', () => {
            const result = service.findOlderThen(30);

            expect(result).to.be.equal(olderThen30);
            expect(mockedDbConnection.findOlderThen.calledOnceWith(30)).to.be.true;
            expect(mockedDbConnection.findOlderThen.calledTwice).to.be.false;
        });
    });

    describe('findOlderThen return data not inclusive', () => {
        it('findOlderThen should return data not inclusive', () => {
            const age = 30;
            const result = service.findOlderThen(age);

            expect(result).to.have.same.members(olderThen30.filter((x) => x.age > age));
            expect(mockedDbConnection.findOlderThen.calledOnceWith(age)).to.be.true;
            expect(mockedDbConnection.findOlderThen.calledTwice).to.be.false;
        });
    });

    describe('findOlderThen with age 0 throws exception', () => {
        it('findOlderThen with age 0 throws exception', () => {
            expect(() => service.findOlderThen(0)).to.throw();
            expect(mockedDbConnection.findOlderThen.calledOnceWith(0)).to.be.false;
        });
    });
});
