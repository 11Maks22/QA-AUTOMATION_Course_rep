import { Locator, Page } from 'playwright';
import { JiraTabsElement } from '../../elements/jira-tabs.element.ts';
import { JiraBasePage } from './jira-base.page.ts';
import { SummaryItemElement } from '../../elements/summary-item.element.ts';
import { ItemDetailsPageModel } from '../../models/item-details.pm.ts';

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
