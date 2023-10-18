import { Page, expect } from "@playwright/test";

export class LoginPage {
    private page: Page;
    
    constructor(page: Page) {
        this. page = page;
    }
    
    //V1 
    async visit() {
        await this.page.goto('XXXXXX.planday.com');
    }
    async acceptCookies() {
        await this.page.getByRole("button", { name: "OK"}).click();
    }

    async login() {
        await this.page.getByPlaceholder('E.g. adam@planday.com').fill('gijanat705@weirby.com');
        await this.page.getByLabel('Password', { exact: true }).fill('HYF_QA123');
        await this.page.getByLabel('Log in').click();

        // Check that user lands on the homepage  
        await expect(this.page).toHaveURL(/.*\/home/);
    }

    //V2

//     async login(url: string, username: string, password: string) {
        
//         await this.page.getByPlaceholder(username).fill(username);
//         await this.page.getByLabel('Password', { exact: true }).fill(password);
//         await this.page.getByLabel('Log in').click();

//         // Check that user lands on the homepage  
//         await expect(this.page).toHaveURL(/.*\/home/);
//     }

}

// TIPS 
// test.only() to run only one test
// Use --headed  mode to see what is going on
// await this.page.pause() to pause the test script and open codegen tool
