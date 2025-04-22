import { defineConfig } from '@playwright/test';
import RPconfig from './reportportal.config';

export default defineConfig({
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
