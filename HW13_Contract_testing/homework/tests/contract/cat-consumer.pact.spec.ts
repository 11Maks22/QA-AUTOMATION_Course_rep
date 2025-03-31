import { Pact } from '@pact-foundation/pact';
import path from 'path';
import axios from 'axios';

const provider = new Pact({
    consumer: 'PetConsumer',
    provider: 'PetStoreAPI',
    port: 1235,
    log: path.resolve(process.cwd(), 'logs', 'pact.log'),
    dir: path.resolve(process.cwd(), 'pacts'),
    logLevel: 'warn'
});

describe('Pact with PetStore API', () => {
    beforeAll(() => provider.setup());
    afterAll(() => provider.finalize());

    it('should get pet by ID from mock provider', async () => {
        await provider.addInteraction({
            state: 'pet with ID 1 exists',
            uponReceiving: 'a request for pet by ID',
            withRequest: {
                method: 'GET',
                path: '/v2/pet/1'
            },
            willRespondWith: {
                status: 200,
                body: {
                    id: 1,
                    name: 'Garfield',
                    status: 'available'
                }
            }
        });

        const mockUrl = provider.mockService.baseUrl;
        const response = await axios.get(`${mockUrl}/v2/pet/1`);
        expect(response.data).toHaveProperty('id', 1);
        expect(response.data).toHaveProperty('name');

        await provider.verify();
    });
});
