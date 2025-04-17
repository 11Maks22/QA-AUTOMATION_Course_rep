import { defineConfig } from '@playwright/test';

export default defineConfig({
    use: {
        baseURL: 'https://openlibrary.org',
        trace: 'retain-on-failure',
        headless: true,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true
    },
    testDir: './tests',
    reporter: [['list'], ['html']],
    timeout: 30 * 1000
});
