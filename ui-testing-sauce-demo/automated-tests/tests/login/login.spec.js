const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/login.page');

test.beforeEach(async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

});

test('valid login should redirect user to inventory page', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await expect(page).toHaveURL(/inventory/);

  await expect(
    page.locator('.inventory_list')
  ).toBeVisible();

});