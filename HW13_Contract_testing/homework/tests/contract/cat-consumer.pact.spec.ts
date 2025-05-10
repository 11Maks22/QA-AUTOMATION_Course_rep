import path from 'path';
import { Pact, Matchers } from '@pact-foundation/pact';
const { like } = Matchers;

describe('Pact with PetStore API', () => {
    const provider = new Pact({
        consumer: 'PetConsumer',
        provider: 'PetStoreAPI',
        port: 1234,
        log: path.resolve(process.cwd(), 'logs', 'pact.log'),
        dir: path.resolve(process.cwd(), 'pacts'),
        spec: 2
    });

    beforeAll(async () => {
        await provider.setup();
        await provider.addInteraction({
            state: 'a pet with ID 1 exists',
            uponReceiving: 'a request for pet with ID 1',
            withRequest: {
                method: 'GET',
                path: '/pet/1'
            },
            willRespondWith: {
                status: 200,
                body: like({
                    id: 1,
                    name: 'Garfield',
                    status: 'available'
                })
            }
        });
    });

    afterAll(() => provider.finalize());

    it('successfully verifies', async () => {
        const response = await fetch('http://localhost:1234/pet/1');
        const body = await response.json();
        expect(response.status).toBe(200);
        expect(body.name).toBe('Garfield');
    });
});
