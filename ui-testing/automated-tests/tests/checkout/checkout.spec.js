const { test, expect } = require('@playwright/test');

test('user should complete checkout successfully', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');

  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
    .click();

  await page.locator('.shopping_cart_link').click();

  await expect(page).toHaveURL(/cart/);

  await page.locator('[data-test="checkout"]').click();

  await expect(page).toHaveURL(/checkout-step-one/);

  await page.locator('[data-test="firstName"]').fill('Bruno');

  await page.locator('[data-test="lastName"]').fill('Sega');

  await page.locator('[data-test="postalCode"]').fill('87000-000');

  await page.locator('[data-test="continue"]').click();

  await expect(page).toHaveURL(/checkout-step-two/);

  await page.locator('[data-test="finish"]').click();

  await expect(page).toHaveURL(/checkout-complete/);

  await expect(
    page.locator('.complete-header')
  ).toContainText('Thank you for your order!');

});