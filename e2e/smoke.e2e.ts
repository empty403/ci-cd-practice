import { test, expect } from '@playwright/test'

test('home page shows its heading and increments the counter', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'CI/CD practice', exact: true })).toBeVisible()
  await page.getByRole('button', { name: 'Count is 0', exact: true }).click()
  await expect(page.getByRole('button', { name: 'Count is 1', exact: true })).toBeVisible()
})
