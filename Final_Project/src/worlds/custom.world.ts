import { BrowserContext, Page } from 'playwright';
import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';

export class CustomWorld extends World {
    public context?: BrowserContext;
    public page?: Page;

    public constructor(options: IWorldOptions) {
        super(options);
    }
}

setWorldConstructor(CustomWorld);
