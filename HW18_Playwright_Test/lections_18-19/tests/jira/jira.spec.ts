import { Page, test, expect } from '@playwright/test';
import { JiraYourWorkPage, JiraPage } from '../../src/pages';
import { expect as expectChai } from 'chai';


test.describe('Jira sample tests with POM and Web Elements', () => {
    let testPage: Page;

    test.beforeEach(async ({ page }) => {
        testPage = page;
        const jiraPage = new JiraPage(page);
        await jiraPage.goTo();
    });

    test('Verify worked on contains not empty summaries', async () => {
        const yourWorkPage = new JiraYourWorkPage(testPage);
        const summaryItems = await yourWorkPage.getWorkedOnSummaryItems();

        expect(summaryItems.length).toBeGreaterThan(0);
        summaryItems.forEach((item) => {
            expect(item.summary).not.toBeNull();
            expect(item.summary).not.toBeUndefined();
        });
    });

    test('Verify tabs are working correctly', async () => {
        const yourWorkPage = new JiraYourWorkPage(testPage);

        const tabNames = await yourWorkPage.tabsElement.getTabNames();
        let activeTab = await yourWorkPage.getActiveTab();

        expectChai(activeTab).to.be.oneOf(tabNames);
        expect(tabNames.length).toBeGreaterThan(1);

        const tabToSelect = getRandomTab(excludeActiveTab(tabNames, activeTab));
        await yourWorkPage.selectTab(tabToSelect);
        activeTab = await yourWorkPage.getActiveTab();

        expect(activeTab).toBe(tabToSelect);
    });
});

function excludeActiveTab(tabNames: string[], activeTab: string): string[] {
    return tabNames.filter((tab) => tab !== activeTab);
}

function getRandomTab(tabNames: string[]): string {
    return tabNames[Math.floor(Math.random() * tabNames.length)];
}
