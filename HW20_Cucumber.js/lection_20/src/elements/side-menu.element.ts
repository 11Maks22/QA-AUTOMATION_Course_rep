import { Locator } from 'playwright';

export class JiraSideMenuElement {
    private get sideMenuElements(): Locator {
        return this.baseLocator.locator('[role="listitem"]');
    }

    public constructor(private readonly baseLocator: Locator) {}

    public async getSideMenuNames(): Promise<string[]> {
        const menuItems = await this.sideMenuElements.all();
        const menuNames: string[] = [];
        for (const item of menuItems) {
            const text = await item.textContent();
            menuNames.push(text?.trim() ?? '');
        }

        return menuNames;
    }

    public async selectMenu(menuName: string): Promise<void> {
        const menuItems = await this.sideMenuElements.all();
        const menuItemsNames = await this.getSideMenuNames();

        await menuItems[menuItemsNames.indexOf(menuName)].click();
    }
}
