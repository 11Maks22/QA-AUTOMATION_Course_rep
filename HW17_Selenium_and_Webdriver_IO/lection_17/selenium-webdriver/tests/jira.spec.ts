import { WebDriver } from 'selenium-webdriver';
import { closeBrowserInstance, getBrowserInstance } from '../src/driver-manager';
import { AtlassianLoginPage } from '../src/pages/atlassian-login.page';

describe('Jira tests', () => {
    let driver: WebDriver;
    let loginPage: AtlassianLoginPage;

    before(async () => {
        driver = await getBrowserInstance();
        loginPage = new AtlassianLoginPage(driver);
        await loginPage.login(process.env.JIRA_LOGIN as string, process.env.JIRA_PASSWORD as string);
    });

    after(async () => {
        await closeBrowserInstance(driver);
    });

    it('should open the Jira page', async () => {
        await driver.get('https://levkoniuk.atlassian.net/');
        await driver.sleep(10000);
    });
});
