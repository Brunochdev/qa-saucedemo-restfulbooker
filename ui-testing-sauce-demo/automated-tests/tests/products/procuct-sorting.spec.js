const { test, expect } = require('@playwright/test');

test('products should be sorted by name A-Z', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');

  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="product-sort-container"]')
    .selectOption('az');

  const productNames = await page
    .locator('.inventory_item_name')
    .allTextContents();

  const sortedNames = [...productNames].sort();

  expect(productNames).toEqual(sortedNames);

});