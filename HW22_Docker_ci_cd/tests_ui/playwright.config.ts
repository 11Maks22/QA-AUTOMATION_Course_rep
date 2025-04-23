import { defineConfig } from '@playwright/test';
import RPconfig from './reportportal.config';

export default defineConfig({
    testDir: './tests',
    reporter: [
        ['@reportportal/agent-js-playwright', RPconfig],
        ['list']
    ],
    use: {
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
    }
});
