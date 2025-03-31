import path from 'path';
import { Verifier } from '@pact-foundation/pact';

describe('Pact Verification: PetStoreAPI', () => {
    it('validates expectations of PetConsumer (GET)', async () => {
        await new Verifier({
            provider: 'PetStoreAPI',
            providerBaseUrl: 'https://petstore.swagger.io',
            pactUrls: [path.resolve(process.cwd(), 'pacts/petconsumer-petstoreapi.json')]
        }).verifyProvider();
    });

    it('validates expectations of PetConsumer (POST)', async () => {
        await new Verifier({
            provider: 'PetStoreAPI',
            providerBaseUrl: 'https://petstore.swagger.io',
            pactUrls: [path.resolve(process.cwd(), 'pacts/petconsumer-petstoreapi-post.json')]
        }).verifyProvider();
    });
});
