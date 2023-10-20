import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/login-page-v1";

test("Login and verify that user lands on the home page", async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Navigate to url
  await loginPage.visit();

  // Accept cookies
  await loginPage.acceptCookies();

  // Login into the portal using credentials
  await loginPage.login();

  // Assert that user is logged in by checking the new url and Home menu
  await expect(page).toHaveURL(/.*home/);
  await expect(page.getByRole("link", { name: "Home" })).toBeVisible();
});
