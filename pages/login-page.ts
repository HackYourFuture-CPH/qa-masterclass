import { Page } from "playwright-core";
import { config } from "../config/config";

export class Login {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async visit() {
    await this.page.goto("https://qa-challenge-hyf.planday.com/");
  }

  async acceptCookies() {
    await this.page.getByRole("button", { name: "OK" }).click();
  }

  async login(config : {username: string, password: string}) {
    await this.page
      .getByPlaceholder("E.g. adam@planday.com")
      .fill(config.username);
    await this.page.getByLabel("Password", { exact: true }).fill(config.password);
    await this.page.getByLabel("Log in").click();
  }
}
