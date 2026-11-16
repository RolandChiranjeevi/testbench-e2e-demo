import { test, expect } from '@playwright/test';

test('Item added to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  const backpackInCart = page
    .locator('[data-test="inventory-item"]')
    .filter({ hasText: 'Sauce Labs Backpack' });

  await expect(backpackInCart).toHaveCount(1);
  await expect(
    backpackInCart.locator('[data-test="inventory-item-name"]')
  ).toHaveText('Sauce Labs Backpack');
});