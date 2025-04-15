import { $, browser } from '@wdio/globals';
import type { ChainablePromiseElement } from 'webdriverio';

class HomePage {
    public get searchInput(): ChainablePromiseElement {
        return $('[name="q"]');
    }

    public async searchFor(term: string): Promise<void> {
        await this.searchInput.setValue(term);
        await browser.keys('Enter');
    }
}

export default new HomePage();
