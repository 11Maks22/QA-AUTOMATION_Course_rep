import { Page, Locator } from '@playwright/test';

export const searchElements = {
    searchInput: (page: Page): Locator =>
        page.locator('#autosuggest input'),

    firstProductTitle: (page: Page): Locator =>
        page.getByRole('link', { name: /xiaomi redmi/i }).first()
};

export const productElements = {
    productTitle: (page: Page): Locator =>
        page.locator('h1.title__main'),

    productPrice: (page: Page): Locator =>
        page.locator('span.price__value').first()
};
