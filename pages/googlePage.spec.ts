import { Page } from '@playwright/test';
export class GooglePage {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }
}