import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/login-page-v2";

test("Login and verify that user lands on the home page", async ({ page }) => {
  const loginPage = new LoginPage(page);

  const url = "https://qa-challenge-hyf.planday.com";
  const credentials = {
    username: "gijanat705@weirby.com",
    password: "HYF_QA123",
  };

  // Navigate to url
  await loginPage.visit(url);

  // Accept cookies
  await loginPage.acceptCookies();

  // Login into the portal using credentials
  await loginPage.login(credentials.username, credentials.password);

  // Assert that user is logged in by checking the new url and Home menu
  await expect(page).toHaveURL(/.*home/);
  await expect(page.getByRole("link", { name: "Home" })).toBeVisible();
});
