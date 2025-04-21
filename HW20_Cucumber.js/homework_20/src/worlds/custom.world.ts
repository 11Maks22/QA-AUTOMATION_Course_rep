import { IWorldOptions, World } from '@cucumber/cucumber';
import { Page } from 'playwright';
import { SearchPage } from '../pages/search.page.js';

export class CustomWorld extends World {
    public page!: Page;
    public searchPage!: SearchPage;

    public constructor(options: IWorldOptions) {
        super(options);
    }
}
