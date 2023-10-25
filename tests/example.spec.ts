import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
test("Login and verify that user lands on the home page", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.visit();
  await loginPage.acceptCookies();
  await loginPage.login();

  //Assertion

  await expect(page).toHaveURL(/.*home/);
  await expect(page.getByRole("link", { name: "Home" })).toBeVisible();

  
  expect(page).toHaveURL("https://qa-challenge-hyf.planday.com")
  await expect(page.getByRole("heading", { name: 'HACKYOURFUTURE' })).toBeVisible();
  await expect(page.getByRole("link", { name: 'HOME' })).toBeVisible();

});
