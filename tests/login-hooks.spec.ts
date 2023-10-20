import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/login-page-v2";
import { LoginHelper } from "../support/get-portal-config";

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  const url = "https://qa-challenge-hyf.planday.com";
  // Navigate to url
  await loginPage.visit(url);
  // Accept cookies
  await loginPage.acceptCookies();
});

test("Login with Normal User and verify that user lands on the home page", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const loginHelper = new LoginHelper();

  // Login into the portal using credentials
  const [userEmail, userPassword] = loginHelper.getCredentialsForPortal(
    "qa-challenge-hyf",
    "normalUser"
  );
  await loginPage.login(userEmail, userPassword);

  // Assert that user is logged in by checking the new url and Home menu
  await expect(page).toHaveURL(/.*home/);
  await expect(page.getByRole("link", { name: "Home" })).toBeVisible();
});

test("Login with Extra User and verify that user lands on the home page", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const loginHelper = new LoginHelper();

  // Login into the portal using credentials
  const [userEmail, userPassword] = loginHelper.getCredentialsForPortal(
    "qa-challenge-hyf",
    "extraUser"
  );
  await loginPage.login(userEmail, userPassword);

  // Assert that user is logged in by checking the new url and Home menu
  await expect(page).toHaveURL(/.*home/);
  await expect(page.getByRole("link", { name: "Home" })).toBeVisible();
});

test.afterEach(async ({ page }) => {
  //Close browser
  await page.close();
});
