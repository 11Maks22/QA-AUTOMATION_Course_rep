import { Then } from '@cucumber/cucumber';
import assert from 'assert';
import { apiResponseBody } from './common-api.steps.js';

Then('відповідь повинна містити поле {string}', function (fieldName: string) {
    assert.ok(apiResponseBody && apiResponseBody[fieldName], `Поле ${fieldName} відсутнє у відповіді`);
});
