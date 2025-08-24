const {test, expect} = require ('@playwright/test');
const { generateRandomEmail } = require('../utils/emailGenerator');

test('Send OTP', async({request}) =>{
    const email = generateRandomEmail();

    const response = await request.get('https://test-craft-ecommerce.vercel.app/api/products', {

    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();


})