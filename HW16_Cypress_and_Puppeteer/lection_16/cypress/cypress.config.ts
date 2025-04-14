import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        baseUrl: 'https://rozetka.com.ua/ua/',
        specPattern: 'cypress/e2e/**/*.cy.{ts,js}',
        supportFile: false, // або вкажи шлях до support, якщо є
        setupNodeEvents() {
            // можна залишити порожнім
        }
    }
});
