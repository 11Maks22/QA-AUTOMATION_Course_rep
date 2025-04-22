import { $ } from '@wdio/globals';
import type { ChainablePromiseElement } from 'webdriverio';

class AuthorPage {
    public get authorName(): ChainablePromiseElement {
        return $('h1[itemprop="name"]');
    }

    public async getAuthorName(): Promise<string> {
        return await this.authorName.getText();
    }
}

export default new AuthorPage();
