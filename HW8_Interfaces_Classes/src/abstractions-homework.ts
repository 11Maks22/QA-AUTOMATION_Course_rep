import { ApiResponse } from './api-homework';

// Абстрактний клас
export abstract class BaseEntity {
    public id: number;

    public constructor(id: number) {
        this.id = id;
    }

    public abstract displayInfo(): void;
}

// Клас, що наслідує BaseEntity
export class ExtendedData extends BaseEntity {
    public summary: string;

    public constructor(data: ApiResponse) {
        super(data.id);
        this.summary = `${data.username} - (Short: ${data.username.substring(0, 20)}...)`;
    }

    public displayInfo(): void {
        console.log(`ID: ${this.id}, Summary: ${this.summary}`);
    }
}
