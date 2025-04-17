import { Locator, Page } from '@playwright/test';
import { JiraTabsElement } from 'src/elements/jira-tabs.element';
import { JiraBasePage } from './jira-base.page';
import { SummaryItemElement } from 'src/elements/summary-item.element';
import { ItemDetailsPageModel } from '../../models/item-details.pm';

export class JiraYourWorkPage extends JiraBasePage {
    private get summaryIcon(): Locator {
        return this.page.locator('[data-testid="global-pages.home.common.ui.item-list.list"]>ul>li');
    }

    public tabsElement: JiraTabsElement;

    public constructor(page: Page) {
        super(page);
        this.tabsElement = new JiraTabsElement(this.page.locator('[role="tablist"]'));
    }

    public async getWorkedOnSummaryItems(): Promise<ItemDetailsPageModel[]> {
        await this.tabsElement.selectTab('Worked on');
        const summaryItems = await this.summaryIcon.all();
        const summaryDetails: ItemDetailsPageModel[] = [];

        for (const item of summaryItems) {
            const itemElement = new SummaryItemElement(item);
            const details = await itemElement.getItemDetails();
            summaryDetails.push(details);
        }

        return summaryDetails;
    }

    public async getTabNames(): Promise<string[]> {
        return this.tabsElement.getTabNames();
    }

    public async selectTab(tabName: string): Promise<void> {
        await this.tabsElement.selectTab(tabName);
    }

    public async getActiveTab(): Promise<string> {
        return this.tabsElement.getActiveTab();
    }
}
