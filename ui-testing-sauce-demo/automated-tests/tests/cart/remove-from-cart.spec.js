const { test, expect } = require('@playwright/test');

test('user should be able to remove product from cart', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');

  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
    .click();

  await expect(
    page.locator('.shopping_cart_badge')
  ).toHaveText('1');

  await page.locator('[data-test="remove-sauce-labs-backpack"]')
    .click();

  await expect(
    page.locator('.shopping_cart_badge')
  ).toHaveCount(0);

});