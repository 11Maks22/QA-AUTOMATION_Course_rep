import { When, Then } from '@cucumber/cucumber';
import assert from 'assert';
import fetch, { Response } from 'node-fetch';

let response: Response;
let responseBody: Record<string, unknown>;

When('я надсилаю POST-запит на {string} з email {string} і паролем {string}',
    async function (url: string, email: string, password: string) {
        response = await fetch(`https://new.fophelp.pro${url}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Username: email,
                Password: password
            })
        });
        responseBody = await response.json() as Record<string, unknown>;
    });

Then('я повинен отримати статус {int}', async function (statusCode: number) {
    assert.strictEqual(response.status, statusCode);
});

Then('відповідь повинна містити токен доступу', function () {
    assert.ok(responseBody.token, 'Очікується наявність токену у відповіді');
    assert.strictEqual(typeof responseBody.token, 'string', 'Токен має бути рядком');
});
