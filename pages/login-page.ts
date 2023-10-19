import { Page } from "@playwright/test";

export class Login{
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async acceptCookies() {
        //step using codegen from playwright
        await this.page.getByRole("button", { name: "OK" }).click();

        //step using xpath
        //await this.page.locator("xpath=//button[contains(.,'OK')].click();
    }       
}