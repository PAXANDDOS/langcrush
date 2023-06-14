import { expect, test } from '@playwright/test'

test.describe('Home', () => {
    test('Home screen', async ({ page }) => {
        await page.goto('http://localhost:3000/')
        await expect(page.getByRole('heading')).toHaveText('LANGCRUSH')
    })
})

test.describe('Settings', () => {
    test('Settings modal', async ({ page }) => {
        await page.goto('http://localhost:3000/')

        await page.click('button[aria-description="fa-solid fa-gear"]')

        await expect(page.getByTitle('modalTitle')).toHaveText('SETTINGS')
    })
})

test.describe('Info', () => {
    test('Info modal', async ({ page }) => {
        await page.goto('http://localhost:3000/')

        await page.click('button[aria-description="fa-solid fa-circle-info"]')

        await expect(page.getByTitle('modalTitle')).toHaveText('INFORMATION')
    })
})

test.describe('Auth', () => {
    test('Sign in modal', async ({ page }) => {
        await page.goto('http://localhost:3000/')

        await page.click('button[aria-description="fa-solid fa-right-to-bracket"]')

        await expect(page.getByTitle('modalTitle')).toHaveText('SIGN IN')
    })
})
