import { test, expect } from '@playwright/test';
import { SearchPage } from '../src/pages/search.page';
import { ProductPage } from '../src/pages/product.page';

test.describe('Hotline product search', () => {
    test('Searching for Xiaomi Redmi 12 Note', async ({ page }) => {
        const searchPage = new SearchPage(page);
        const productPage = new ProductPage(page);

        await page.goto('https://hotline.ua');

        await searchPage.searchForProduct('Xiaomi Redmi 12 Note');
        await searchPage.clickFirstProduct();

        const title = await productPage.getProductTitle();
        expect(title.toLowerCase()).toContain('xiaomi redmi');

        const priceVisible = await productPage.isPriceVisible();
        expect(priceVisible).toBeTruthy();
    });

    test('Searching for Xiaomi Redmi Note 13', async ({ page }) => {
        const searchPage = new SearchPage(page);
        const productPage = new ProductPage(page);

        await page.goto('https://hotline.ua');

        await searchPage.searchForProduct('Xiaomi Redmi Note 13');
        await searchPage.clickFirstProduct();

        const title = await productPage.getProductTitle();
        expect(title.toLowerCase()).toContain('redmi note 13');

        const priceVisible = await productPage.isPriceVisible();
        expect(priceVisible).toBeTruthy();
    });

    test('Product title contains brand name Xiaomi', async ({ page }) => {
        const searchPage = new SearchPage(page);
        const productPage = new ProductPage(page);

        await page.goto('https://hotline.ua');

        await searchPage.searchForProduct('Redmi Note 14');
        await searchPage.clickFirstProduct();

        const title = await productPage.getProductTitle();
        expect(title.toLowerCase()).toContain('xiaomi');
    });

    test('Product price contains valid formatting with ₴ or €', async ({ page }) => {
        const searchPage = new SearchPage(page);
        const productPage = new ProductPage(page);

        await page.goto('https://hotline.ua');

        await searchPage.searchForProduct('Xiaomi Redmi Note 14');
        await searchPage.clickFirstProduct();

        const priceText = await productPage.getPriceText();

        expect(priceText).toMatch(/^\d[\d\s]*\s?(₴|грн|€)?$/i);
    });
});
