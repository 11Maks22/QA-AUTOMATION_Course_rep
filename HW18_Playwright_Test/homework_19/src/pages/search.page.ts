import { Page, expect } from '@playwright/test';
import { searchElements } from '../elements/elements';

export class SearchPage {
    public constructor(private readonly page: Page) {}

    public async searchForProduct(productName: string): Promise<void> {
        await searchElements.searchInput(this.page).fill(productName);
        await this.page.keyboard.press('Enter');
    }

    public async clickFirstProduct(): Promise<void> {
        const firstResult = searchElements.firstProductTitle(this.page);
        await expect(firstResult).toBeVisible({ timeout: 10000 });
        await firstResult.click();
    }
}
