import { $ } from '@wdio/globals';
import type { ChainablePromiseElement } from 'webdriverio';

class BookDetailsPage {
    public get bookTitle(): ChainablePromiseElement {
        return $('h3[itemprop="name"]');
    }

    public get authorLink(): ChainablePromiseElement {
        return $('a[href^="/authors/"]');
    }

    public async clickAuthor(): Promise<void> {
        await (await this.authorLink).waitForDisplayed({ timeout: 5000 });
        await this.authorLink.click();
    }

    public async getTitleText(): Promise<string> {
        await (await this.bookTitle).waitForDisplayed({ timeout: 5000 });
        return await this.bookTitle.getText();
    }
}

export default new BookDetailsPage();
