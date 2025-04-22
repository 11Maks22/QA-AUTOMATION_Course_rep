import { browser, expect } from '@wdio/globals';
import HomePage from '../src/pages/home.page';
import SearchResultsPage from '../src/pages/search-results.page';
import BookDetailsPage from '../src/pages/book-details.page';
import AuthorPage from '../src/pages/author.page';

describe('OpenLibrary UI Navigation Test Suite', () => {
    beforeEach(async () => {
        await browser.url('https://openlibrary.org');
    });

    it('should search for a book and view its details', async () => {
        await HomePage.searchFor('Clean Code');
        await SearchResultsPage.clickFirstResult();

        const title = await BookDetailsPage.getTitleText();
        console.log('📚 Book title received:', title);
        expect(title.toLowerCase()).toContain('clean code');
    });

    it('should navigate from book to author page and verify author name exists', async () => {
        await HomePage.searchFor('Clean Code');
        await SearchResultsPage.clickFirstResult();

        await BookDetailsPage.clickAuthor();
        const authorName = await AuthorPage.getAuthorName();

        expect(authorName).toBeTruthy();
    });
});
