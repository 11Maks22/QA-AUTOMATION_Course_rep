import { ProcessedData } from './data-processor-homework';
import { ApiResponse } from './api-homework';

const exampleData: ApiResponse = { id: 2, name: 'Real name', username: 'Tester Username: ', email: 'This is a test email: ' };
const processed = new ProcessedData(exampleData);
console.log(processed);

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
