import { Page, expect } from "@playwright/test";

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async visit(url: string) {
    await this.page.goto(url);
  }
  async acceptCookies() {
    await this.page.getByRole("button", { name: "OK" }).click();
  }

  async login(username: string, password: string) {
    await this.page.getByPlaceholder("E.g. adam@planday.com").fill(username);
    await this.page.getByLabel("Password", { exact: true }).fill(password);
    await this.page.getByLabel("Log in").click();
  }
}

// TIPS
// test.only() to run only one test
// Use --headed  mode to see what is going on
// await this.page.pause() to pause the test script and open codegen tool
