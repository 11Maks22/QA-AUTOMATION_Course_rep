import path from 'path';
import { Verifier } from '@pact-foundation/pact';

(async () => {
    try {
        await new Verifier({
            provider: 'PetStoreAPI',
            providerBaseUrl: 'https://petstore.swagger.io',
            pactUrls: [path.resolve(process.cwd(), 'homework/pact/pacts/PetConsumer-PetStoreAPI.json')],
            publishVerificationResult: false
        });
        console.log('Provider verification complete!');
    } catch (error) {
        console.error('Provider verification failed:', error);
    }
})();
