import { Page, Locator } from '@playwright/test';
import { elements } from '../elements/elements';

export class TrackerPage {
    public readonly page: Page;
    public readonly title: Locator;
    public readonly descriptionInput: Locator;
    public readonly amountInput: Locator;
    public readonly addButton: Locator;
    public readonly transactionItem: Locator;
    public readonly balanceText: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.title = page.locator(elements.title);
        this.descriptionInput = page.locator(elements.descriptionInput);
        this.amountInput = page.locator(elements.amountInput);
        this.addButton = page.locator(elements.addButton);
        this.transactionItem = page.locator(elements.transactionItem);
        this.balanceText = page.locator(elements.balanceText);
    }

    public async goTo(): Promise<void> {
        await this.page.goto('http://localhost:3000');
    }

    public async addTransaction(description: string, amount: string): Promise<void> {
        await this.descriptionInput.fill(description);
        await this.amountInput.fill(amount);
        await this.addButton.click();
        await this.transactionItem.first().waitFor();
    }
}
