import { ApiResponse } from './api-homework';

// Клас для обробки JSON-об'єкта
export class ProcessedData {
    public id: number;
    public summary: string;

    public constructor(data: ApiResponse) {
        this.id = data.id;
        this.summary = `${data.name} - (${data.email})...$`;
    }
}
