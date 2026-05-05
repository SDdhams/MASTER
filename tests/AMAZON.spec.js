import { test } from '@playwright/test';
test('search for tablets on Amazon', async ({page})=>
{
    // Open Amazon
    await page.goto('https://www.amazon.in/');
    await page.getByPlaceholder('Search Amazon.in').fill('tablets');
    await page.waitForTimeout(3000);
    if (await page.getByRole('button', { name: 'tablets under 20000' }).isVisible())
         {console.log('Search results for tablets under 20000 are visible');}
    else 
        {console.log('Search results for tablets under 20000 are not visible');}
    




    
})