const { test, expect } = require('@playwright/test');

test('invalid login should display error message', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('invalid_user');

  await page.locator('[data-test="password"]').fill('wrong_password');

  await page.locator('[data-test="login-button"]').click();

  await expect(
    page.locator('[data-test="error"]')
  ).toBeVisible();

  await expect(
    page.locator('[data-test="error"]')
  ).toContainText(
    'Username and password do not match'
  );

});