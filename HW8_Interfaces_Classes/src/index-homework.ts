import { fetchData } from './api-homework';
import { ProcessedData } from './data-processor-homework';
import { ExtendedData } from './abstarctions-homework';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function main() {
    // Отримуємо дані
    const data = await fetchData();

    // Обробляємо перший елемент
    if (data.length > 0) {
        const processed = new ProcessedData(data[0]);  // <-- Now correctly passing an ApiResponse
        console.log('Processed Data:', processed);

        const extended = new ExtendedData(data[0]);  // <-- Now correctly passing an ApiResponse
        extended.displayInfo();
    }
}

main();
