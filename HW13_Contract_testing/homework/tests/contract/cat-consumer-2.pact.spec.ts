import { Pact } from '@pact-foundation/pact';
import path from 'path';
import axios from 'axios';

const provider = new Pact({
    consumer: 'PetConsumer',
    provider: 'PetStoreAPI',
    port: 1236,
    log: path.resolve(process.cwd(), 'logs', 'pact-post.log'),
    dir: path.resolve(process.cwd(), 'pacts'),
    logLevel: 'warn'
});

describe('Pact with PetStore API (POST)', () => {
    beforeAll(() => provider.setup());
    afterAll(() => provider.finalize());

    it('should add a new pet via mock provider', async () => {
        const newPet = {
            id: 123,
            name: 'Buddy',
            status: 'available'
        };

        await provider.addInteraction({
            state: 'provider accepts a new pet',
            uponReceiving: 'a request to add a pet',
            withRequest: {
                method: 'POST',
                path: '/v2/pet',
                headers: { 'Content-Type': 'application/json' },
                body: newPet
            },
            willRespondWith: {
                status: 200,
                body: newPet
            }
        });

        const mockUrl = provider.mockService.baseUrl;
        const response = await axios.post(`${mockUrl}/v2/pet`, newPet);
        expect(response.data).toHaveProperty('id', 123);
        expect(response.data.name).toBe('Buddy');

        await provider.verify();
    });
});
