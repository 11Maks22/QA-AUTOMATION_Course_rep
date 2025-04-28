export default {
    loader: ['ts-node/esm'],
    format: [
        'progress',
        '@cucumber/pretty-formatter',
        'json:./reports/cucumber.json',
        'html:./reports/cucumber-embedded.html',
        'message:allure-results/allure-results.ndjson',
        'junit:./reports/cucumber.xml'
    ],
    formatOptions: {
        snippetInterface: 'async-await'
    },
    paths: [
        'features/**/*.feature'
    ],
    import: [
        'src/**/*.ts'
    ],
    retry: 1
};
