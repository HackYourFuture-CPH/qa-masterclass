import { test, expect } from "@playwright/test";
import { Login } from "../pages/login-page";
import { config } from "../config/config";

test("Login Test", async ({ page }) => {
  const loginPage = new Login(page);

  await loginPage.visit();
  await loginPage.acceptCookies();
  await loginPage.login(config);
  await expect(page).toHaveURL(/.*home/);
});
