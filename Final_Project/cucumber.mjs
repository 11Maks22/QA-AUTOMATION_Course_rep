export default {
    loader: ['ts-node/esm'],
    format: [
        '@cucumber/pretty-formatter',
        'json:./reports/cucumber.json',
        'html:./reports/cucumber-embedded.html',
        'junit:./reports/cucumber.xml'
    ],
    formatOptions: {
        snippetInterface: 'async-await'
    },
    paths: [
        'features/**/*.feature',
        'features/**/*.feature'
    ],
    import: [
        'src/**/*.ts',
        'src/**/*.ts'
    ],
    retry: 1
};
