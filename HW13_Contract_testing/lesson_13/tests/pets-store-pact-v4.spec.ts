import { expect } from 'chai';
import * as path from 'path';
import { MatchersV3, Verifier, PactV4, SpecificationVersion } from '@pact-foundation/pact';
import { PetStoreService } from '../src/services/pet-store.service';
import { PetDto } from '../src/models/pet.dto';
const { like } = MatchersV3;

describe('PactV4 PetsStore tests: Consumer', () => {
    let petStoreService: PetStoreService;

    const provider = new PactV4({
        consumer: 'Pets-Web-v4',
        provider: 'Pets-API-v4',
        spec: SpecificationVersion.SPECIFICATION_VERSION_V4
    });

    const petExample: PetDto = {
        id: 1002,
        category: {
            id: 1002,
            name: 'dog'
        },
        name: 'freddie-clone',
        photoUrls: ['string'],
        tags: [
            {
                id: 1002,
                name: 'my freddie clone'
            }
        ],
        status: 'available'
    };

    const EXPECTED_BODY = like(petExample);

    describe('create /pet', () => {
        it('creates the requested pet', () => {
            // Arrange
            return provider
                .addInteraction()
                .given('pet interaction')
                .uponReceiving('create a pet')
                .withRequest('POST', '/v2/pet', (builder) => {
                    builder.headers({ Accept: 'application/json', 'Content-Type': 'application/json' });
                    builder.jsonBody(petExample);
                })
                .willRespondWith(200, (builder) => {
                    builder.headers({ 'Content-Type': 'application/json' });
                    builder.jsonBody(EXPECTED_BODY);
                })
                .executeTest(async (mockServer) => {
                    // Act
                    petStoreService = new PetStoreService(mockServer.url);
                    const responsePost = await petStoreService.createPet(petExample);

                    // Assert
                    expect(responsePost.data).to.deep.eq(petExample);
                });
        });

        it('returns the requested pet', () => {
            // Arrange
            return provider
                .addInteraction()
                .uponReceiving('get a pet')
                .withRequest('GET', '/v2/pet/1002', (builder) => {
                    builder.headers({ Accept: 'application/json' });
                })
                .willRespondWith(200, (builder) => {
                    builder.headers({ 'Content-Type': 'application/json' });
                    builder.jsonBody(EXPECTED_BODY);
                })
                .executeTest(async (mockServer) => {
                    // Act
                    petStoreService = new PetStoreService(mockServer.url);
                    const response = await petStoreService.getPet(1002);

                    // Assert
                    expect(response.data).to.deep.eq(petExample);
                });
        });
    });
});

describe('PetsStore Pact Verification v4: Provider', () => {
    it('validates the expectations of Matching Service', () => {
        return new Verifier({
            providerBaseUrl: 'https://petstore.swagger.io',
            pactUrls: [path.resolve(process.cwd(), './pacts/Pets-Web-v4-Pets-API-v4.json')]
        })
            .verifyProvider();
    });
});
