import puppeteer, { Browser, Page } from 'puppeteer';
import { expect } from 'chai';

describe('OpenLibrary Tests', () => {
    let browser: Browser;
    let page: Page;

    before(async () => {
        browser = await puppeteer.launch({ headless: true });
        page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 800 });
    });

    after(async () => {
        await browser.close();
    });

    it('should show search results for "dune frank herbert"', async () => {
        await page.goto('https://openlibrary.org');
        await page.type('input[name="q"]', 'dune frank herbert');
        await page.keyboard.press('Enter');

        await page.waitForNavigation({ waitUntil: 'domcontentloaded' });
        const results = await page.$$('.searchResultItem');

        expect(results.length).to.be.greaterThan(0);
    });

    it('should open book details page from search results', async () => {
        await page.goto('https://openlibrary.org');
        await page.type('input[name="q"]', 'dune frank herbert');
        await page.keyboard.press('Enter');

        await page.waitForSelector('.searchResultItem a');
        const firstLink = await page.$('.searchResultItem a');
        if (firstLink) await firstLink.click();

        await page.waitForNavigation({ waitUntil: 'domcontentloaded' });
        const url = page.url();
        expect(url).to.include('/works/');
    });

    it('should open Frank Herbert author page', async () => {
        await page.goto('https://openlibrary.org');
        await page.type('input[name="q"]', 'Frank Herbert');
        await page.keyboard.press('Enter');

        await page.waitForSelector('a[href^="/authors/"]');
        const authorLink = await page.$('a[href^="/authors/"]');
        if (authorLink) await authorLink.click();

        await page.waitForNavigation({ waitUntil: 'domcontentloaded' });
        const heading = await page.$eval('h1', (el) => el.textContent);
        expect(heading?.toLowerCase()).to.include('frank herbert');
    });

    it('should show a book cover image on details page', async () => {
        await page.goto('https://openlibrary.org');
        await page.type('input[name="q"]', 'dune frank herbert');
        await page.keyboard.press('Enter');

        await page.waitForSelector('.searchResultItem a');
        const firstLink = await page.$('.searchResultItem a');
        if (firstLink) await firstLink.click();

        await page.waitForSelector('img[src*="/b/id/"]');
        const coverExists = await page.$('img[src*="/b/id/"]');

        expect(coverExists).to.not.be.null;
    });
});
