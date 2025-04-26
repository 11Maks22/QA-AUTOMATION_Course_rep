import { When, Then } from '@cucumber/cucumber';
import assert from 'assert';
import fetch, { Response } from 'node-fetch';
import { integrationApiResponse } from './integration-login-incomes.steps.js';

export let apiResponse: Response;
export let apiResponseBody: any = null;

When('я надсилаю POST-запит на {string} з email {string} і паролем {string}', async function (url: string, email: string, password: string) {
    const response = await fetch(`https://new.fophelp.pro${url}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Username: email, Password: password })
    });

    apiResponse = response;

    try {
        apiResponseBody = await apiResponse.json();
    } catch (error) {
        console.warn('Не вдалося розпарсити JSON у відповіді на POST-запит:', error);
        apiResponseBody = null;
    }
});

Then('я повинен отримати статус {int}', async function (expectedStatusCode: number) {
    const responseToCheck = apiResponse || integrationApiResponse;
    if (!responseToCheck) {
        throw new Error('API відповідь не отримана');
    }
    const status = responseToCheck.status;
    assert.strictEqual(status, expectedStatusCode, `Очікував статус ${expectedStatusCode}, отримав ${status}`);
});

Then('відповідь повинна містити токен доступу', function () {
    if (!apiResponseBody) {
        throw new Error('Тіло відповіді порожнє або не є JSON');
    }
    assert.ok(apiResponseBody.token, 'Токен доступу відсутній у відповіді');
});
