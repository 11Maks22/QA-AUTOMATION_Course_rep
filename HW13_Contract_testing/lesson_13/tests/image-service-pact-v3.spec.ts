import { MatchersV3, PactV3, Verifier } from '@pact-foundation/pact';
import { ImageService } from '../src/services/image.service';
import { ImageDto } from '../src/models/image.dto';
import { expect } from 'chai';
import * as path from 'path';

describe('Pact V3 Image service contract tests', () => {
    let imageService: ImageService;
    // request api key here https://thecatapi.com/
    const xApiKey = '<you api key>';

    const provider = new PactV3({
        consumer: 'image-consumer-v3',
        provider: 'image-provider-v3'
    });

    const imageResponseExample: Partial<ImageDto[]> = [
        {
            id: 'Urb5s2Zhy',
            url: 'https://cdn2.thecatapi.com/images/Urb5s2Zhy.jpg',
            width: 640,
            height: 391,
            sub_id: 'VILE',
            created_at: '2025-02-27T18:27:29.000Z',
            original_filename: 'the_cat_1.jpg',
            breed_ids: 'abob,ycho',
            breeds: []
        } as unknown as ImageDto
    ];

    const expectedBody = MatchersV3.like(imageResponseExample);

    describe('Consumer tests using Pact V3', () => {
        it('Image service return expected response', () => {
            provider
                .given('Image exists')
                .uponReceiving('A request to get images')
                .withRequest({
                    method: 'GET',
                    path: '/images',
                    headers: {
                        accept: 'application/json',
                        'x-api-key': xApiKey
                    }
                })
                .willRespondWith({
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: expectedBody
                });

            return provider.executeTest(async (mockImageService) => {
                imageService = new ImageService(
                    mockImageService.url,
                    xApiKey
                );

                const images = await imageService.getMyImages();
                const filteredImages = images.find((image) => image.id === imageResponseExample[0]?.id) as ImageDto;

                expect(filteredImages).to.contain.keys(
                    'id',
                    'url',
                    'width',
                    'height',
                    'sub_id',
                    'created_at',
                    'original_filename',
                    'breed_ids',
                    'breeds'
                );
                expect(filteredImages.id).to.be.a('string');
                expect(filteredImages.url).to.be.a('string');
                expect(filteredImages.width).to.be.a('number');
                expect(filteredImages.height).to.be.a('number');
                expect(filteredImages.sub_id).to.be.a('string');
                expect(filteredImages.created_at).to.be.a('string');
                expect(filteredImages.original_filename).to.be.a('string');
                expect(filteredImages.breed_ids).to.be.a('string');
                expect(filteredImages.breeds).to.be.an('array');
            });
        });
    });

    describe('Pact V3 verification', () => {
        it('verify provider', () => {
            return new Verifier({
                providerBaseUrl: 'https://api.thecatapi.com/v1',
                pactUrls: [path.resolve(process.cwd(), './pacts/image-consumer-v3-image-provider-v3.json')]
            })
                .verifyProvider()
                .then(() => {
                    console.log('Pact Verification Complete!');
                });
        });
    });
});
