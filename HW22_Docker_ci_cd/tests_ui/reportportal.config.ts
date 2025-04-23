const RPconfig = {
    apiKey: 'api-key_6jCAzQC6SW2gSk4qLmSctFqXhFVI_HtOgd3_V-ycyvSBpRTTkXEsg4JoRaRnIFgW', // токен з профілю ReportPortal
    endpoint: 'http://reportportal:8080/api/v2', // endpoint
    project: 'maksym_slobodianyk', // назва проєкту
    launch: 'UI tests launch',
    description: 'Playwright tests for Expense Tracker App',
    attributes: [{ key: 'framework', value: 'playwright' }],
    debug: false,
    restClientConfig: {
        timeout: 30000
    }
};

export default RPconfig;
