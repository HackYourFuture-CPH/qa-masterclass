import { Page } from "playwright-core";

export class Login {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
