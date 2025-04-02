import axios from 'axios';

const API_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_aOAuZNFXzYjLLn2jDmo4sMSC0YppZG8KAjIAFJBT9SSpVO6FbofZBZ68Jih66pNB';

axios.defaults.headers.common['x-api-key'] = API_KEY;

describe('Integration: TheCatAPI (images + favourites + votes)', () => {
    let imageId: string;
    let favouriteId: number;
    let voteId: number;

    it('should get an image, add to favourites, and vote', async () => {
        // 1. Get an image
        const { data: images } = await axios.get(`${API_URL}/images/search`);
        expect(images.length).toBeGreaterThan(0);
        imageId = images[0].id;

        // 2. Add to favourites
        const { data: favourite } = await axios.post(`${API_URL}/favourites`, {
            image_id: imageId
        });
        expect(favourite.id).toBeDefined();
        favouriteId = favourite.id;

        // 3. Add a vote
        const { data: vote } = await axios.post(`${API_URL}/votes`, {
            image_id: imageId,
            value: 1
        });
        expect(vote.id).toBeDefined();
        voteId = vote.id;

        console.log(`✅ Image: ${imageId}, Favourite: ${favouriteId}, Vote: ${voteId}`);
    });
});
