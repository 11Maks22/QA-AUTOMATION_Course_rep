import { Before, After } from '@cucumber/cucumber';
import { Browser, chromium } from 'playwright';
import { CustomWorld } from '../worlds/custom.world.js';

let browser: Browser;

Before(async function (this: CustomWorld) {
    browser = await chromium.launch({ headless: false, slowMo: 100 });
    const context = await browser.newContext();
    const page = await context.newPage();
    this.context = context;
    this.page = page;
});

After(async function () {
    await browser.close();
});
