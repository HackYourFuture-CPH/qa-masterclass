import { Page, expect } from "@playwright/test";
export class LoginPage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async visit() {
    await this.page.goto("https://qa-challenge-hyf.planday.com");
  }
  async acceptCookies() {
    await this.page.getByRole("button", { name: "OK" }).click();
  }
  async login() {
    await this.page.getByPlaceholder('E.g. adam@planday.com').fill('gijanat705weirby.com');
    await this.page.getByLabel('Password', { exact: true }).fill('HYF_QA123');
    await this.page.getByLabel('Log in').click();
  }
}