import { test, expect } from '@playwright/test';
import { TrackerPage } from '../src/pages/tracker.page';

test.describe('Expense Tracker App', () => {
    test.beforeEach(async ({ page }) => {
        const tracker = new TrackerPage(page);
        await tracker.goTo();
    });

    test('should display the app title', async ({ page }) => {
        const tracker = new TrackerPage(page);
        await expect(tracker.title).toHaveText('Expense Tracker App');
    });

    test('should add a transaction', async ({ page }) => {
        const tracker = new TrackerPage(page);
        await tracker.addTransaction('Coffee', '5');
        await expect(tracker.transactionItem.first()).toContainText('Coffee');
    });

    test('should update balance after adding transaction', async ({ page }) => {
        const tracker = new TrackerPage(page);
        await tracker.addTransaction('Lunch', '15');

        await expect(tracker.transactionItem).toHaveCount(1);
        await expect(tracker.transactionItem).toContainText('Lunch');
        await expect(tracker.balanceText).toHaveText('$15.00');
    });
});
