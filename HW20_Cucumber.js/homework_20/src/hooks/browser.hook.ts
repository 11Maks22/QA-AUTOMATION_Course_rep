import { BeforeAll, AfterAll, Before, After, setWorldConstructor } from '@cucumber/cucumber';
import { chromium, Page, BrowserContext, Browser } from 'playwright';
import { CustomWorld } from '../worlds/custom.world.js';
import { SearchPage } from '../pages/search.page.js';

let browser: Browser;

BeforeAll(async () => {
    browser = await chromium.launch({
        headless: true
    });
});

Before(async function (this: CustomWorld) {
    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();

    this.page = page;
    this.searchPage = new SearchPage(page);
});

After(async function (this: CustomWorld) {
    await this.page?.close();
});

AfterAll(async () => {
    await browser?.close();
});

setWorldConstructor(CustomWorld);
