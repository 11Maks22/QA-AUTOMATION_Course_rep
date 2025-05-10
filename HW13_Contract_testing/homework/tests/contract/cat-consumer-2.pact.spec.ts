import path from 'path';
import { Pact, Matchers } from '@pact-foundation/pact';
const { like } = Matchers;

describe('Pact with PetStore API - POST', () => {
    const provider = new Pact({
        consumer: 'PetConsumer',
        provider: 'PetStoreAPI',
        port: 1235,
        log: path.resolve(process.cwd(), 'logs', 'pact-post.log'),
        dir: path.resolve(process.cwd(), 'pacts'),
        spec: 2
    });

    beforeAll(async () => {
        await provider.setup();
        await provider.addInteraction({
            state: 'the client wants to create a pet',
            uponReceiving: 'a request to create a pet',
            withRequest: {
                method: 'POST',
                path: '/pet',
                headers: { 'Content-Type': 'application/json' },
                body: {
                    name: 'Garfield',
                    status: 'available'
                }
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

    it('successfully creates a pet', async () => {
        const response = await fetch('http://localhost:1235/pet', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: 'Garfield', status: 'available' })
        });

        const text = await response.text();
        console.log('Response body:', text);

        const body = JSON.parse(text);
        expect(response.status).toBe(200);
        expect(body.name).toBe('Garfield');
    });
});
