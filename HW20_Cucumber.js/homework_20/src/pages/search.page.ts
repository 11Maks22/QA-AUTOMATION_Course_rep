import { Page, Locator } from 'playwright';

export class SearchPage {
    public readonly page: Page;
    public readonly searchInput: Locator;
    public readonly searchButton: Locator;
    public readonly searchResults: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.searchInput = page.locator('input[type="text"]'); // поле пошуку
        this.searchButton = page.locator('input.search-bar-submit'); // унікальна кнопка пошуку
        this.searchResults = page.locator('#searchResults > ul > li'); // список результатів
    }

    public async open(): Promise<void> {
        await this.page.goto('https://openlibrary.org/', { waitUntil: 'domcontentloaded' });
    }

    public async searchFor(term: string): Promise<void> {
        await this.searchInput.fill(term);
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
            this.searchButton.click()
        ]);
    }

    public async isResultPresent(title: string): Promise<boolean> {
        const titleLocator = this.page.locator('#searchResults > ul > li h3', {
            hasText: title
        });
        return await titleLocator.first().isVisible();
    }
}
