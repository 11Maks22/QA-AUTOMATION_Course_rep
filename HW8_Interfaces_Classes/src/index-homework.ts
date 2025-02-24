import { fetchData } from './api-homework';
import { ProcessedData } from './data-processor-homework';
import { ExtendedData } from './abstarctions-homework';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function main() {
    try {
        // Отримуємо дані
        const data = await fetchData();

        // Обробляємо перший елемент
        if (data.length > 0) {
            const processed = new ProcessedData(data[0]);
            console.log('Processed Data:', processed);

            const extended = new ExtendedData(data[0]);
            extended.displayInfo();
        }
    } catch (error) {
        console.error('Error in main:', error);
    }
}

(async () => {
    await main();
})();
