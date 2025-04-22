import { defineConfig } from '@playwright/test';

const config = defineConfig({
    reporter: [
        ['list'],
        ['allure-playwright']
    ],
    outputDir: 'test-results',
    use: {
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
    }
});

export default config;
