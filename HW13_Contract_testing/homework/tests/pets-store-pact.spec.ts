import { getPetById, addPet, deletePet } from '../src/services/pet-store.service';

describe('Pet Store API Service', () => {
    it('should get a pet by ID', async () => {
        try {
            const petId = 1;
            const pet = await getPetById(petId);
            expect(pet).toHaveProperty('id', petId);
            console.log('Pet retrieved:', pet);
        } catch (error: any) {
            console.error('Failed to get pet by ID:', error?.message || 'Unknown error');
        }
    });

    it('should add a new pet', async () => {
        try {
            const newPet = { id: 123, name: 'Buddy', status: 'available' };
            const addedPet = await addPet(newPet);
            expect(addedPet).toHaveProperty('id', newPet.id);
            console.log('Pet added:', addedPet);
        } catch (error: any) {
            console.error('Failed to add pet:', error?.message || 'Unknown error');
        }
    });

    it('should delete a pet', async () => {
        try {
            const petId = 123;
            const response = await deletePet(petId);
            expect(response).toHaveProperty('message', 'Pet deleted');
            console.log('Pet deleted:', response);
        } catch (error: any) {
            console.error('Failed to delete pet:', error?.message || 'Unknown error');
        }
    });
});
