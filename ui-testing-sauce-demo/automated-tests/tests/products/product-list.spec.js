const { test, expect } = require('@playwright/test');

test('product list should be displayed successfully', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');

  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/inventory/);

  await expect(
    page.locator('.inventory_list')
  ).toBeVisible();

  await expect(
    page.locator('.inventory_item')
  ).toHaveCount(6);

});