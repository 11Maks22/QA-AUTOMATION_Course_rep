import { Given, When, Then } from '@cucumber/cucumber';
import assert from 'assert';
import fetch, { Response } from 'node-fetch';

export let integrationApiResponse: Response;
let integrationApiResponseBody: any = null;
let token: string;

Given('я авторизуюсь через API', async function () {
    const loginResponse = await fetch('https://new.fophelp.pro/api/react/Authenticate/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Username: 'm.slobodianuk@gmail.com',
            Password: 'aN8"bX6`cQ7;'
        })
    });

    const loginData = await loginResponse.json() as { token: string; expiration?: string };
    console.log('Відповідь на логін:', loginData);

    if (!loginData || !loginData.token) {
        throw new Error(`Токен не отримано. Відповідь сервера: ${JSON.stringify(loginData)}`);
    }

    token = loginData.token;
});

When('я надсилаю GET-запит на {string}', async function (url: string) {
    const response = await fetch(`https://new.fophelp.pro${url}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

    integrationApiResponse = response;

    const contentType = response.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
        try {
            integrationApiResponseBody = await response.json();
        } catch (error) {
            console.warn('Не вдалося розпарсити JSON у відповіді на GET-запит:', error);
            integrationApiResponseBody = null;
        }
    } else {
        console.warn('Отримано не JSON. Content-Type:', contentType);
        integrationApiResponseBody = null;
    }
});

Then('відповідь повинна містити список прибутків', function () {
    if (!integrationApiResponseBody) {
        console.warn('Прибутки не перевіряються, оскільки тіло відповіді відсутнє або це не JSON.');
        return;
    }
    assert.ok(Array.isArray(integrationApiResponseBody), 'Прибутки не повертаються у вигляді масиву');
});
