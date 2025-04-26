import { Page } from '@playwright/test';

export class LoginPage {
    public constructor(private readonly page: Page) {}

    public async goto(): Promise<void> {
        await this.page.goto('https://new.fophelp.pro/');
    }

    public async clickLoginLink(buttonText: string): Promise<void> {
        await this.page.getByRole('link', { name: buttonText }).click();
    }

    public async fillEmail(email: string): Promise<void> {
        await this.page.getByPlaceholder('Email').fill(email);
    }

    public async fillPassword(password: string): Promise<void> {
        await this.page.getByPlaceholder('Password').fill(password);
    }

    public async submitLogin(): Promise<void> {
        await this.page.getByRole('button', { name: 'УВІЙТИ' }).click();
    }

    public async isProfileVisible(): Promise<void> {
        await this.page.getByText('Мій профіль').waitFor({ state: 'visible' });
    }
}
