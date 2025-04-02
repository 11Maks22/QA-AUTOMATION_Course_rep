import { expect } from 'chai';
import * as path from 'path';
import { PactV3, MatchersV3, Verifier } from '@pact-foundation/pact';
import { PetStoreService } from '../src/services/pet-store.service';
import { PetDto } from '../src/models/pet.dto';
const { like } = MatchersV3;

describe('PactV3 PetsStore consumer tests', () => {
    let petStoreService: PetStoreService;

    // Сетапаємо контракт
    const provider = new PactV3({
        consumer: 'Pets-Web-v3',
        provider: 'Pets-API-v3'
    });

    const petExample: PetDto = {
        id: 1001,
        category: {
            id: 1001,
            name: 'dog'
        },
        name: 'freddie',
        photoUrls: ['string'],
        tags: [
            {
                id: 1001,
                name: 'my freddie'
            }
        ],
        status: 'available'
    };

    const EXPECTED_BODY = like(petExample);

    describe('create and then request a pet', () => {
        it('returns the requested pet', () => {
            // Arrange
            provider
                .given('pet interaction')
                .uponReceiving('create a pet')
                .withRequest({
                    method: 'POST',
                    path: '/v2/pet',
                    body: petExample,
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    }
                })
                .willRespondWith({
                    status: 200,
                    headers: { 'content-type': 'application/json' },
                    body: EXPECTED_BODY
                })
                .uponReceiving('get a pet')
                .withRequest({
                    method: 'GET',
                    path: '/v2/pet/1001'
                })
                .willRespondWith({
                    status: 200,
                    headers: { 'content-type': 'application/json' },
                    body: EXPECTED_BODY
                });

            return provider.executeTest(async (mockserver) => {
                // Act
                petStoreService = new PetStoreService(mockserver.url);
                const responsePost = await petStoreService.createPet(petExample);
                const response = await petStoreService.getPet(1001);

                // Assert
                expect(responsePost.data).to.deep.eq(petExample);
                expect(response.data).to.deep.eq(petExample);
            });
        });
    });
});

describe('PactV3 PetsStore Provider Verification', () => {
    it('validates the expectations of Matching Service', () => {
        return new Verifier({
            providerBaseUrl: 'https://petstore.swagger.io',
            pactUrls: [path.resolve(process.cwd(), './pacts/Pets-Web-v3-Pets-API-v3.json')]
        })
            .verifyProvider();
    });
});
