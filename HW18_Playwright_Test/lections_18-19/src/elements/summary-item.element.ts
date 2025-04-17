import { Locator } from '@playwright/test';
import { ItemDetailsPageModel } from '../models/item-details.pm';

export class SummaryItemElement {
    private get summary(): Locator {
        return this.baseLocator.locator('span h4');
    }

    private get id(): Locator {
        return this.baseLocator.locator('span>small>span:nth-child(1)');
    }

    private get project(): Locator {
        return this.baseLocator.locator('span>small>span:nth-child(3)');
    }

    private get status(): Locator {
        return this.baseLocator.locator('//a/span[not(./h4)]');
    }

    public constructor(private readonly baseLocator: Locator) {}

    public async getItemDetails(): Promise<ItemDetailsPageModel> {
        const summary = await this.getSummary();
        const id = await this.getId();
        const project = await this.getProject();
        const status = await this.getStatus();

        return {
            id,
            summary,
            project,
            status
        };
    }

    private async getSummary(): Promise<string> {
        const summary = await this.summary.textContent();
        return summary?.trim() ?? '';
    }

    private async getId(): Promise<string> {
        const id = await this.id.textContent();
        return id?.trim() ?? '';
    }
    private async getProject(): Promise<string> {
        const project = await this.project.textContent();
        return project?.trim() ?? '';
    }

    private async getStatus(): Promise<string> {
        if (!(await this.status.isVisible())) {
            return '';
        }

        const status = await this.status.textContent();
        return status?.trim() ?? '';
    }
}
