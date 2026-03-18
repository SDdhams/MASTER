

// import { test } from '@playwright/test';

// test.only('Myntra', async ({ page }) => {

//   // Open Myntra page
//   await page.goto('https://www.myntra.com/kids-tshirts');

//   // Wait for products to load
//   await page.waitForSelector('.product-base');

//   // Get all products
//   const products = await page.$$('.product-base');

//   // 1️⃣ Total number of products
//   console.log("Total products:", products.length);

//   let minPrice = 999999;
//   let minProductName = "";

//   // Loop through each product
//   for (let i = 0; i < products.length; i++) {

//     const priceElement = await products[i].$('.product-discountedPrice, .product-price');
//     const priceText = await priceElement.innerText();

//     const price = parseInt(priceText.replace("Rs. ", ""));

//     const nameElement = await products[i].$('.product-product');
//     const productName = await nameElement.innerText();

//     // Find minimum price
//     if (price < minPrice) {
//       minPrice = price;
//       minProductName = productName;
//     }
//   }

//   // Print results
//   console.log("Minimum Price:", minPrice);
//   console.log("Product Name with Minimum Price:", minProductName);

// });


const { test, expect } = require('@playwright/test')

test('minimum and maximum product price', async ({ page }) => {

    await page.goto('https://www.myntra.com')
    await page.hover('(//a[text()="Kids"])[1]')
    await page.waitForTimeout(3000)
    await page.click('//a[@data-reactid="345"]')
    await page.waitForLoadState();

    const productNames = await page.locator('//li[@class="product-base"]//h3').allInnerTexts()
    const prices = await page.locator('//li[@class="product-base"]//span[@class="product-discountedPrice"]').allInnerTexts()
    const productdiscountprice = await page.locator('//li[@class="product-base"]//ancestor::span[@class="product-discountedPrice"]').count();
    
    console.log(prices);

    console.log("productdiscountprice count",productdiscountprice);
    
    let priceNumbers = prices.map(p => parseInt(p.replace("Rs. ", "")))

    let minPrice = Math.min(...priceNumbers)
    
    
    let minIndex = priceNumbers.indexOf(minPrice)

    console.log("Minimum Price :", minPrice)
    console.log("Minimum Price Product Name :", productNames[minIndex])

})

   
   
   


