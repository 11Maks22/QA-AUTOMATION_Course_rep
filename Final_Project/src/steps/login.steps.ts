import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('я відкриваю головну сторінку FOPHelp', async function () {
    await this.page.goto('https://new.fophelp.pro/');
});

When('я клікаю на кнопку "Увійти"', async function () {
    await this.page.locator('text=Увійти').click();
});

When('я вводжу email {string}', async function (email: string) {
    await this.page.locator('#email').fill(email);
});

When('я вводжу пароль {string}', async function (password: string) {
    await this.page.locator('#password').fill(password);
});

When('я натискаю кнопку входу', async function () {
    await this.page.locator('form button').click();
});

Then('я повинен побачити, що авторизація пройшла успішно', async function () {
    const homeLink = this.page.locator('a.nav-link:text("Домашня")');
    await expect(homeLink).toBeVisible({ timeout: 5000 });
});
