/*import {test, expect} from '@playwright/test';

test('Home Page',async({page})=>{


      await page.goto('https://chatgpt.com/');

    const pageTitle= await page.title();
    console.log('page title is :', pageTitle);

    // title expected
      await expect(page).toHaveTitle('ChatGPT');

     // "SS of homepage"
        
        await page.screenshot({path: 'file.png' })
        
    
    // await  expect(page).toHaveTitle('Services');

    const PageURL = page.url();
    console.log('Page URL is:',PageURL);
    

    await expect(page).toHaveURL('https://chatgpt.com/')

    await page.close();
})*/

import { test } from '@playwright/test';
test('login facebook', async ({page})=>
{
    // Open Facebook
    await page.goto('https://www.facebook.com');
    console.log(' Facebook opened');

    // Fill Username/Email
    // await page.fill('.x1i10hfl', 'dhams');
    await page.fill('#_R_1h6kqsqppb6amH1_', 'dhams');
    
    console.log(' Username filled');

    // Fill Password
    await page.fill('#_R_1hmkqsqppb6amH1_', '12345');
    console.log(' Password filled');
    
    await page.getByRole ('button',{name :'log In'}).click();
    
    // wair for 3  seconds
    await page.waitForTimeout(8000);

    // Take screenshot before login
    await page.screenshot({ path: 'facebook_login.png', fullPage: true });
    console.log(' Screenshot saved as facebook_login.png');
    await page.close();
});


