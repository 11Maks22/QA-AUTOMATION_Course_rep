import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../worlds/custom.world.js';

Given('I open the OpenLibrary homepage', async function (this: CustomWorld) {
    await this.searchPage.open();
});

When('I search for {string}', async function (this: CustomWorld, title: string) {
    await this.searchPage.searchFor(title);
});

Then('I should see results with the book title containing {string}', async function (this: CustomWorld, title: string) {
    const found = await this.searchPage.isResultPresent(title);
    expect(found).toBeTruthy();
});

Then('I should see a message that no books directly matched your search', async function (this: CustomWorld) {
    const noMatchMessage = this.page.locator('text=No books directly matched your search');
    await noMatchMessage.waitFor({ state: 'visible', timeout: 5000 });
    const isVisible = await noMatchMessage.isVisible();
    expect(isVisible).toBeTruthy();
});
