import { addVote, getImages } from '../src/services/cat-api.service';

describe('Cat API Service', () => {
    it('should retrieve images', async () => {
        try {
            const images = await getImages();
            expect(Array.isArray(images)).toBe(true);
            expect(images.length).toBeGreaterThan(0);
            console.log('Images retrieved:', images);
        } catch (error: any) {
            console.error('Failed to retrieve images:', error?.message || 'Unknown error');
        }
    });

    it('should add a vote', async () => {
        try {
            const imageId = 'MTc4OTc0MA';
            const vote = await addVote(imageId, 1);
            expect(vote).toHaveProperty('message');
            console.log('Vote added successfully:', vote);
        } catch (error: any) {
            console.error('Failed to add vote:', error?.message || 'Unknown error');
        }
    });
});
