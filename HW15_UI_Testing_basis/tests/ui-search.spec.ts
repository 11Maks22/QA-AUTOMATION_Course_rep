import { test, expect } from '@playwright/test';

test('Search "Dune" on OpenLibrary (with Enter)', async ({ page }) => {
    await page.goto('https://openlibrary.org');

    // Ввести запит і натиснути Enter
    const input = page.locator('input[name="q"]');
    await input.fill('Dune');
    await input.press('Enter');

    // Дочекатись результатів
    const results = page.locator('.searchResultItemCTA a');
    await results.first().waitFor({ timeout: 10000 });

    const count = await results.count();
    expect(count).toBeGreaterThan(0);
});
