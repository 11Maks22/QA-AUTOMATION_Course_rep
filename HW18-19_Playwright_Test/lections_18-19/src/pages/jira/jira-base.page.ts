import { JiraSideMenuElement } from 'src/elements/side-menu.element';
import { Page } from '@playwright/test';
import { JiraHeaderElement } from '../../elements/jira-header.element';

export class JiraBasePage {
    private readonly sideBar: JiraSideMenuElement;
    private readonly header: JiraHeaderElement;

    public constructor(protected readonly page: Page) {
        this.page = page;
        this.sideBar = new JiraSideMenuElement(this.page.locator('[aria-label="Sidebar"]'));
        this.header = new JiraHeaderElement(this.page.locator('[aria-label="Header"]'));
    }

    // ToDo: Header interaction should be here

    // ToDo: Side menu interactions should be here
}
