import axios from 'axios';

const API_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_aOAuZNFXzYjLLn2jDmo4sMSC0YppZG8KAjIAFJBT9SSpVO6FbofZBZ68Jih66pNB';
const SUB_ID = 'student_123'; // Унікальний параметр що зв’язує запити

axios.defaults.headers.common['x-api-key'] = API_KEY;

describe('Integration: favourites + votes linked by sub_id', () => {
    let imageId: string;

    it('should create favourite and vote with sub_id, then verify links', async () => {
        const { data: images } = await axios.get(`${API_URL}/images/search`);
        imageId = images[0].id;

        // Add to favourites
        await axios.post(`${API_URL}/favourites`, {
            image_id: imageId,
            sub_id: SUB_ID
        });

        // Add vote
        await axios.post(`${API_URL}/votes`, {
            image_id: imageId,
            sub_id: SUB_ID,
            value: 1
        });

        // Get all favourites for sub_id
        const { data: favourites } = await axios.get(`${API_URL}/favourites`, {
            params: { sub_id: SUB_ID }
        });

        // Get all votes for sub_id
        const { data: votes } = await axios.get(`${API_URL}/votes`, {
            params: { sub_id: SUB_ID }
        });

        const favMatch = favourites.find((f: any) => f.image_id === imageId);
        const voteMatch = votes.find((v: any) => v.image_id === imageId);

        expect(favMatch).toBeDefined();
        expect(voteMatch).toBeDefined();
        console.log(`✅ Matched by sub_id: Favourite ID ${favMatch.id}, Vote ID ${voteMatch.id}`);
    });
});
