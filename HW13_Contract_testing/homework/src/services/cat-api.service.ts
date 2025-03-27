import axios from 'axios';
import { stringify } from 'flatted';

const API_URL = 'https://api.thecatapi.com/v1';

function safeLog(message: string, obj: any): void {
    try {
        console.log(message, stringify(obj));
    } catch (err) {
        console.error('Error logging object:', err);
    }
}

export const getImages = async (): Promise<any> => {
    try {
        const response = await axios.get(`${API_URL}/images/search`);
        safeLog('Get Images Response:', response);
        return response.data;
    } catch (error) {
        safeLog('Error getting images:', error);
        throw error;
    }
};

export const addVote = async (imageId: string, value: number): Promise<any> => {
    try {
        const response = await axios.post(`${API_URL}/votes`, {
            image_id: imageId,
            value: value
        });
        safeLog('Add Vote Response:', response);
        return response.data;
    } catch (error) {
        safeLog('Error adding vote:', error);
        throw error;
    }
};

export const getVotes = async (): Promise<any> => {
    try {
        const response = await axios.get(`${API_URL}/votes`);
        safeLog('Get Votes Response:', response);
        return response.data;
    } catch (error) {
        safeLog('Error getting votes:', error);
        throw error;
    }
};

export const addFavorite = async (imageId: string): Promise<any> => {
    try {
        const response = await axios.post(`${API_URL}/favourites`, {
            image_id: imageId
        });
        safeLog('Add Favorite Response:', response);
        return response.data;
    } catch (error) {
        safeLog('Error adding favorite:', error);
        throw error;
    }
};

export const getFavorites = async (): Promise<any> => {
    try {
        const response = await axios.get(`${API_URL}/favourites`);
        safeLog('Get Favorites Response:', response);
        return response.data;
    } catch (error) {
        safeLog('Error getting favorites:', error);
        throw error;
    }
};

export const deleteFavorite = async (favoriteId: string): Promise<any> => {
    try {
        const response = await axios.delete(`${API_URL}/favourites/${favoriteId}`);
        safeLog('Delete Favorite Response:', response);
        return response.data;
    } catch (error) {
        safeLog('Error deleting favorite:', error);
        throw error;
    }
};
