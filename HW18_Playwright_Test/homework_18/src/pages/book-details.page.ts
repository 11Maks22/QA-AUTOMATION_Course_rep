import { Locator, Page } from '@playwright/test';
import { BookDetailsSelectors } from '../elements/elements';

export class BookDetailsPage {
    private readonly page: Page;
    public readonly bookTitle: Locator;
    public readonly authorLink: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.bookTitle = page.locator(BookDetailsSelectors.bookTitle);
        this.authorLink = page.locator(BookDetailsSelectors.authorLink);
    }

    public async waitForBookTitleVisible(): Promise<void> {
        await this.bookTitle.scrollIntoViewIfNeeded();
        await this.bookTitle.first().waitFor({ state: 'visible', timeout: 15000 });
    }

    public async waitForAuthorLinkVisible(): Promise<void> {
        await this.authorLink.scrollIntoViewIfNeeded();
        await this.authorLink.first().waitFor({ state: 'visible', timeout: 15000 });
    }
}
