import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dfaceboo%26oq%3Dfaceboo%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDI2MjhqMGoyqAIAsAIB%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3D1Eu5acqPCdCcseMP9rPP8Qc&q=EhAkAUkAiQNY8-EsoYcHibE_GNSX5c0GIjCrWD-P9fThwWhEnSdS7v5IAEUED5umvDjf3NxUqY9mkf90dmpXppKy-x7pSQFk93AyAVJaAUM');
  await page.locator('iframe[name="a-t7hcplisjkqr"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.getByRole('link', { name: 'Facebook - log in or sign up' }).click();
  await page.getByRole('textbox', { name: 'Email address or mobile number' }).click();
  await page.getByRole('textbox', { name: 'Email address or mobile number' }).fill('hfjjgcvcv');
});