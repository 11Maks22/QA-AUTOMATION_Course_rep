import { test, expect } from '@playwright/test';
import { SearchPage } from '../src/pages/search.page';

const keyword = 'Dune';

test.describe('OpenLibrary search – stable verified tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveURL(/openlibrary\.org/);
    });

    test('Searches for a book and verifies title and author in first result', async ({ page }) => {
        const searchPage = new SearchPage(page);
        await searchPage.search(keyword);

        const title = await searchPage.getFirstResultTitle();
        const author = await searchPage.getFirstResultAuthor();

        expect(title.toLowerCase()).toContain('dune');
        expect(author.toLowerCase()).toContain('frank herbert');
    });

    test('Clicking book title opens book page with correct title', async ({ page }) => {
        const searchPage = new SearchPage(page);
        await searchPage.search(keyword);

        const firstTitle = await searchPage.getFirstResultTitle();
        const titleLocator = page.locator('#searchResults > ul > li:nth-child(1) > div > div.details > div > h3 > a');

        await titleLocator.evaluateHandle((el) => el.scrollIntoView({ behavior: 'instant', block: 'center' }));
        await page.waitForTimeout(500);
        await expect(titleLocator).toHaveText(/Dune/i);
        await titleLocator.click();

        const bookTitle = page.locator('h1.work-title').first();
        await expect(bookTitle).toHaveText(firstTitle);
    });

    test('Clicking author name redirects to author page', async ({ page }) => {
        const searchPage = new SearchPage(page);
        await searchPage.search(keyword);

        const authorLink = page.locator('li:nth-of-type(1) span.bookauthor > a');

        await expect(authorLink).toBeVisible({ timeout: 10000 });

        const expectedPattern = /\/authors\/OL\d+A/;
        await Promise.all([
            page.waitForURL(expectedPattern, { timeout: 15000 }),
            authorLink.click()
        ]);

        expect(page.url()).toMatch(expectedPattern);
    });

    test('Validates presence of "Preview" button for first result', async ({ page }) => {
        const searchPage = new SearchPage(page);
        await searchPage.search(keyword);

        const previewButton = searchPage.getFirstPreviewButton();
        await expect(previewButton).toBeVisible();
    });
});
