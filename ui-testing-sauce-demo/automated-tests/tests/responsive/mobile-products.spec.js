const { test, expect } = require('@playwright/test');

test('products page should be displayed correctly on mobile viewport', async ({ page }) => {

  await page.setViewportSize({
    width: 393,
    height: 851
  });

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