import { DbQueryProcessorExampleService } from 'src/db-query-processor-example.service.ts';
import { DbConnectionExample } from '../src/db-connection-example';
import { beforeEach, describe, expect,  Mocked,  test, vi } from 'vitest';
import { ClassExample } from '../src/class-example';

describe('DbQueryProcessorExampleService Unit Tests', () => {
    let mockedDbConnection: Mocked<DbConnectionExample>;
    let service: DbQueryProcessorExampleService;

    const expectedResult = [
        {
            name: 'John',
            age: 20
        },
        {
            name: 'Jane',
            age: 25
        }
    ] as ClassExample[];

    beforeEach(() => {
        mockedDbConnection = {
            findOlderThen: vi.fn(),
            findYoungerThen: vi.fn()
        } as unknown as Mocked<DbConnectionExample>;

        mockedDbConnection.findYoungerThen.mockRestore();

        service = new DbQueryProcessorExampleService(mockedDbConnection);
    });

    describe('findYoungerThen return data', () => {
        test('with age 30 data should be as expected', () => {
            mockedDbConnection.findYoungerThen.mockReturnValue(expectedResult);

            const result = service.findYoungerThen(30);
            expect(result).toEqual(expectedResult);
            expect(mockedDbConnection.findYoungerThen).toHaveBeenCalledWith(30);
            expect(mockedDbConnection.findYoungerThen).toHaveBeenCalledTimes(1);
        });
    });

    describe('findYoungerThen return throws error then age is less then 0', () => {
        test('age is 0', () => {
            mockedDbConnection.findYoungerThen.mockReturnValue(expectedResult);
            expect(() => service.findYoungerThen(0)).toThrowError();
            expect(mockedDbConnection.findYoungerThen).toHaveBeenCalledTimes(0);
        });
    });
});