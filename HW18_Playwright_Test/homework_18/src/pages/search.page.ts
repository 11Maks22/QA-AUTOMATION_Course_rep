import { Page, Locator } from '@playwright/test';
import { SearchPageSelectors } from '../elements/elements';

export class SearchPage {
    public readonly page: Page;
    public readonly searchInput: Locator;
    public readonly searchButton: Locator;
    public readonly searchResults: Locator;
    public readonly firstTitle: Locator;
    public readonly firstAuthor: Locator;
    public readonly firstPreviewButton: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.searchInput = page.locator(SearchPageSelectors.searchInput);
        this.searchButton = page.locator(SearchPageSelectors.searchButton);
        this.searchResults = page.locator(SearchPageSelectors.searchResults);
        this.firstTitle = page.locator(SearchPageSelectors.firstTitle);
        this.firstAuthor = page.locator(SearchPageSelectors.firstAuthor);
        this.firstPreviewButton = page.locator(SearchPageSelectors.firstPreviewButton);
    }

    public async search(query: string): Promise<void> {
        await this.searchInput.waitFor({ state: 'visible' });
        await this.searchInput.fill(query);
        await this.searchButton.click();
        await this.page.waitForLoadState('networkidle');
    }

    public async getFirstResultTitle(): Promise<string> {
        return (await this.firstTitle.textContent())?.trim() || '';
    }

    public async getFirstResultAuthor(): Promise<string> {
        return (await this.firstAuthor.textContent())?.trim() || '';
    }

    public async clickFirstResult(): Promise<void> {
        await this.firstTitle.click();
    }

    public getFirstPreviewButton(): Locator {
        return this.firstPreviewButton;
    }
}
