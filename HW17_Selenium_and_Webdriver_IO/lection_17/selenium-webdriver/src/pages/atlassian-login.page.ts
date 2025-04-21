import { By, until, WebDriver, WebElementPromise } from 'selenium-webdriver';
import { getWaitedLocator } from '../driver-manager';

export class AtlassianLoginPage {
    private baseUrl = 'https://atlassian.com/';
    private signInSelector = 'sign-in';
    private get signInButton(): WebElementPromise {
        return this.driver.wait(until.elementLocated({ name: this.signInSelector }));
    }

    private get emailInput(): WebElementPromise {
        return this.driver.wait(until.elementLocated(By.id('username')), 10000);
    }

    private get continueButton(): WebElementPromise {
        return this.driver.wait(until.elementLocated(By.id('login-submit')), 10000);
    }

    private get passwordInput(): WebElementPromise {
        return this.driver.wait(until.elementLocated({ id: 'password' }), 10000);
    }

    private get loginButton(): WebElementPromise {
        return getWaitedLocator(this.driver, { id: 'login-submit' });
        //return this.driver.wait(until.elementLocated({ id: 'login-submit'}), 10000);
    }

    public get userLogo(): WebElementPromise {
        return getWaitedLocator(this.driver, By.css('nav button img'));
    }

    public get loginState(): WebElementPromise {
        return getWaitedLocator(this.driver, {xpath: '//button[@name="sign-in"] | //div[@data-testid="main-container"]'});
    }

    public get loggedInImg(): WebElementPromise {
        return this.driver.findElement({ css: '[data-testid="main-container"]'});
    }

    public constructor(private driver: WebDriver) {}

    public async goto(): Promise<void> {
        await this.driver.get(this.baseUrl);
        const button = await this.loginState;
        await this.driver.wait(until.elementIsEnabled(button), 10000);
    }

    public async login(username: string, password: string): Promise<void> {
        await this.driver.get(this.baseUrl);
        const signInButton = await this.loginState;

        try {
            if (await this.loggedInImg.isDisplayed()) {
                console.log('already logged in...');
                return;
            }
        } catch (err) {
            if ((err as Error).name !== 'NoSuchElementError') {
                throw err;
            }

            await signInButton.click();
            await this.emailInput.sendKeys(username);
            await this.continueButton.click();
            const input = await this.passwordInput;
            await this.driver.wait(until.elementIsEnabled(input), 10000);
            await this.driver.wait(until.elementIsVisible(input), 10000).sendKeys(password);
            await this.loginButton.click();

            await this.driver.wait(until.elementLocated(By.css('nav button img')), 10000);
        }

        // This is how Selenium WebDriver Page object function were written before
        // await this.driver.wait(until.elementLocated(By.id('username')), 10000).sendKeys(username);
        // await this.driver.wait(until.elementLocated(By.id('login-submit')), 10000).click();
        // await this.driver.wait(until.elementLocated({ id: 'password'}), 10000).sendKeys(password);
        // await this.driver.wait(until.elementLocated({ id: 'login-submit'}), 10000).click();
    }
}
