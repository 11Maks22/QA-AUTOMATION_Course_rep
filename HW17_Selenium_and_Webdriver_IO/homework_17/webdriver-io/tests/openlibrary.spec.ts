import OpenLibraryPage from '../src/pages/openlibrary.page';
import { browser, expect } from '@wdio/globals';

describe('OpenLibrary', () => {
    it('should show results for "dune frank herbert"', async () => {
        await OpenLibraryPage.open();
        await OpenLibraryPage.searchFor('dune frank herbert');

        await OpenLibraryPage.searchResults[0].waitForDisplayed();
        const resultsCount = await OpenLibraryPage.searchResults.length;
        expect(resultsCount).toBeGreaterThan(0);
    });

    it('should open book details page', async () => {
        await OpenLibraryPage.open();
        await OpenLibraryPage.searchFor('dune frank herbert');
        await OpenLibraryPage.firstResultLink.click();

        const url = await browser.getUrl();
        expect(url).toContain('/works/');


    });

    it('should open Frank Herbert author page', async () => {
        await OpenLibraryPage.open();
        await OpenLibraryPage.searchFor('Frank Herbert');

        await OpenLibraryPage.authorLink.waitForDisplayed();
        await OpenLibraryPage.authorLink.click();

        const url = await browser.getUrl();
        expect(url).toContain('/authors/');
    });

    it('should display a cover image on the book detail page', async () => {
        await OpenLibraryPage.open();
        await OpenLibraryPage.searchFor('dune frank herbert');

        await OpenLibraryPage.firstResultLink.click();
        await OpenLibraryPage.bookCoverImg.waitForDisplayed();
        const isDisplayed = await OpenLibraryPage.bookCoverImg.isDisplayed();
        expect(isDisplayed).toBe(true);
    });
});
