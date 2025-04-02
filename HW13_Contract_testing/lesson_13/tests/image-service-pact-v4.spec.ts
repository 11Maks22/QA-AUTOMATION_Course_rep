import { MatchersV3, PactV4, SpecificationVersion, Verifier } from '@pact-foundation/pact';
import { ImageService } from '../src/services/image.service';
import { ImageDto } from '../src/models/image.dto';
import { expect as expectChai } from 'chai';
import * as path from 'path';

describe('Pact V4', () => {
    let imageService: ImageService;
    // request api key here https://thecatapi.com/
    const xApiKey = '<you api key>';

    const provider = new PactV4({
        consumer: 'image-consumer-v4',
        provider: 'image-provider-v4',
        spec: SpecificationVersion.SPECIFICATION_VERSION_V4
    });

    const imageExample: Partial<ImageDto[]> = [
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

    const expectedBody = MatchersV3.like(imageExample);

    describe('images pact v4', () => {
        it('return images', () => {
            provider
                .addInteraction()
                .given('images exist')
                .uponReceiving('a request to get images')
                .withRequest( 'GET', '/images', (builder) => {
                    builder.headers({
                        accept: 'application/json',
                        'x-api-key': xApiKey
                    });
                })
                .willRespondWith(200, (builder) => {
                    builder.headers({
                        'Content-Type': 'application/json'
                    });
                    builder.jsonBody(expectedBody);
                })
                .executeTest(async (mockServer) => {
                    // Act
                    imageService = new ImageService(mockServer.url, xApiKey);
                    const response = await imageService.getMyImages();
                    const filteredResponse = response.find((x) => x.id === (imageExample[0] as ImageDto)?.id) as ImageDto;

                    expectChai(filteredResponse).to.contain.keys('id', 'url', 'width', 'height', 'sub_id', 'created_at', 'original_filename', 'breed_ids', 'breeds');
                    expectChai(filteredResponse.id).to.be.a('string');
                    expectChai(filteredResponse.url).to.be.a('string');
                    expectChai(filteredResponse.breed_ids).to.be.a('string');
                    expectChai(filteredResponse.width).to.be.a('number');
                    expectChai(filteredResponse.height).to.be.a('number');
                    expectChai(filteredResponse.sub_id).to.be.a('string');
                    expectChai(filteredResponse.breeds).to.be.an('array');
                });
        });
    });

    describe('Pact V4 verification', () => {
        it('verify provider', () => {
            return new Verifier({
                providerBaseUrl: 'https://api.thecatapi.com/v1',
                pactUrls: [path.resolve(process.cwd(), './pacts/image-consumer-v4-image-provider-v4.json')]
            })
                .verifyProvider()
                .then(() => {
                    console.log('Pact Verification Complete!');
                });
        });
    });
});
