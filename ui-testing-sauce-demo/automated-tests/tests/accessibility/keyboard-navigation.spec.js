const { test, expect } = require('@playwright/test');

test('user should navigate products page using keyboard only', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');

  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.keyboard.press('Enter');

  await expect(page).toHaveURL(/inventory/);

  // foco no primeiro botão add to cart
  await page.locator(
    '[data-test="add-to-cart-sauce-labs-backpack"]'
  ).focus();

  await page.keyboard.press('Enter');

  await expect(
    page.locator('.shopping_cart_badge')
  ).toHaveText('1');

  await expect(
  page.locator('.shopping_cart_link')
  ).toBeVisible();

});