import { Page } from '@playwright/test';
import { productElements } from '../elements/elements';

export class ProductPage {
    public constructor(private readonly page: Page) {}

    public async getProductTitle(): Promise<string> {
        return await productElements.productTitle(this.page).innerText();
    }

    public async isPriceVisible(): Promise<boolean> {
        return await productElements.productPrice(this.page).isVisible();
    }

    public async getPriceText(): Promise<string> {
        return await productElements.productPrice(this.page).innerText();
    }
}
