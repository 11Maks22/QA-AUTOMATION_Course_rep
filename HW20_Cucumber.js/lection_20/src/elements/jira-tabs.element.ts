import { Locator } from 'playwright';

export class JiraTabsElement {
    private get tabText(): Locator {
        return this.baseLocator.locator('//div/span');
    }

    private get countForTab(): Locator {
        return this.baseLocator.locator('//div/span/span');
    }

    private get tab(): Locator {
        return this.baseLocator.locator('div[tabindex]');
    }

    public constructor(private baseLocator: Locator) {}

    public async getTabNames(): Promise<string[]> {
        const tabNames: string[] = [];

        const tabs = await this.tabText.all();

        for (const tab of tabs) {
            const text = await tab.textContent();

            let count = '';
            if (await tab.locator('//span[text()]').isVisible()) {
                count = await tab.locator('//span[text()]').textContent() ?? '';
            }

            tabNames.push(text?.trim().replace(count, '') ?? '');
        }

        return tabNames;
    }

    public async selectTab(tabName: string): Promise<void> {
        const tabNames = await this.getTabNames();
        if (!tabNames.includes(tabName)) {
            throw new Error(`Tab with name "${tabName}" not found.`);
        }

        const tabs = await this.tabText.all();
        await tabs[tabNames.indexOf(tabName)].click();
    }

    public async getActiveTab(): Promise<string> {
        const tabs = await this.tab.all();

        let index = -1;
        for (const tab of tabs) {
            const selected = (await tab.getAttribute('aria-selected')) === 'true';
            if (selected) {
                index = tabs.indexOf(tab);
                break;
            }
        }

        const tab = (await this.getTabNames())[index];

        return tab;
    }
}
