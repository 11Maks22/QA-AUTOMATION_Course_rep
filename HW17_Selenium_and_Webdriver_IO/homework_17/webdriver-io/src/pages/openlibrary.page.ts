import { $, $$, browser } from '@wdio/globals';
import type { ChainablePromiseElement, ChainablePromiseArray } from 'webdriverio';

class OpenLibraryPage {
    public get searchInput(): ChainablePromiseElement {
        return $('input[name="q"]');
    }

    public get searchResults(): ChainablePromiseArray {
        return $$('.searchResultItem');
    }

    public get firstResultLink(): ChainablePromiseElement {
        return $('.searchResultItem a');
    }

    public get authorLink(): ChainablePromiseElement {
        return $('a[href^="/authors/"]');
    }

    public get bookCoverImg(): ChainablePromiseElement {
        return $('img[src*="/b/id/"]');
    }

    public async open(): Promise<void> {
        await browser.url('https://openlibrary.org');
    }

    public async searchFor(text: string): Promise<void> {
        await this.searchInput.setValue(text);
        await browser.keys('Enter');
    }
}

export default new OpenLibraryPage();
