import reporter from 'multiple-cucumber-html-reporter';

reporter.generate({
  jsonDir: './reports',
  reportPath: './reports/html',
  metadata: {
    browser: {
      name: 'chrome',
      version: 'latest'
    },
    device: 'Local test machine',
    platform: {
      name: 'windows',
      version: '10'
    }
  },
  customData: {
    title: 'Final Project QA Automation Report',
    data: [
      { label: 'Project', value: 'FOPHelp E2E Tests' },
      { label: 'Executed', value: new Date().toLocaleString() }
    ]
  }
});
