import { test, expect, Page } from '@playwright/test';

export class Login{
    private page: Page;

    constructor(page:Page){
        this.page=page;
    }
}

test('has no title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });
