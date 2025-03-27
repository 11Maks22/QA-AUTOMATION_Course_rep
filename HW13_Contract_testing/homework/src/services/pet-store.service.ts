import axios from 'axios';
import { stringify } from 'flatted';

const API_URL = 'https://petstore.swagger.io/v2';

function safeLog(message: string, obj: any): void {
    try {
        console.log(message, stringify(obj));
    } catch (err) {
        console.error('Error logging object:', err);
    }
}

export const getPetById = async (petId: number): Promise<any> => {
    try {
        const response = await axios.get(`${API_URL}/pet/${petId}`);
        safeLog('Get Pet by ID Response:', response);
        return response.data;
    } catch (error) {
        safeLog('Error getting pet by ID:', error);
        throw error;
    }
};

export const addPet = async (petData: any): Promise<any> => {
    try {
        const response = await axios.post(`${API_URL}/pet`, petData);
        safeLog('Add Pet Response:', response);
        return response.data;
    } catch (error) {
        safeLog('Error adding pet:', error);
        throw error;
    }
};

export const deletePet = async (petId: number): Promise<any> => {
    try {
        const response = await axios.delete(`${API_URL}/pet/${petId}`);
        safeLog('Delete Pet Response:', response);
        return response.data;
    } catch (error) {
        safeLog('Error deleting pet:', error);
        throw error;
    }
};
