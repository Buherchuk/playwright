import { test, expect } from '@playwright/test';


test.describe('reports and screenshots', async () => {
  test('should take a screenshot and attach to the report', async ({ page }) => {
    await page.goto('https://google.com');
    // const screenshot = await page.screenshot();
    // await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
    expect(await page.title()).toBe('Example Domain');
  });


});


