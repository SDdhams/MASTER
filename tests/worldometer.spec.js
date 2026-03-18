import { test , expect } from '@playwright/test';

test ("Get India Density using direct XPath", async ({ page }) => {

  // browser launch
  await page.goto('https://www.worldometers.info/world-population/population-by-country/');

  // data to load
  await page.waitForLoadState();

  // Wfirst row
  await page.waitForSelector('//table/tbody/tr[1]');

  // Density locator
  const indiaDensity = await page.locator('//table/tbody/tr[1]/td[6]').innerText();

  // Print output
  console.log('India Density:', indiaDensity);

});