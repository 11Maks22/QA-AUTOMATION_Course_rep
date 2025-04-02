// tests/api-search.spec.ts
import { test, expect } from '@playwright/test';

test('API search "Dune"', async ({ request }) => {
    const response = await request.get('https://openlibrary.org/search.json?q=Dune');
    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    expect(body.numFound).toBeGreaterThan(0);
    expect(body.docs.some((doc: any) => doc.title.includes("Dune"))).toBeTruthy();
});
