import axios from 'axios';

// Інтерфейс відповіді від API
export interface ApiResponse {
    id: number;
    name: string;
    username: string;
    email: string;
}

// Функція для отримання JSON-даних
export async function fetchData(): Promise<ApiResponse[]> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = await axios.get<ApiResponse[]>(url);
    return response.data;
}
