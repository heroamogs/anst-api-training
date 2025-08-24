const {test, expect} = require ('@playwright/test');
const { generateRandomEmail } = require('../utils/emailGenerator');

test('API-Testing from Jsonplaceholder', async({request}) =>{

    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data:{
            "title": "API-Testing",
            "body": "bar",
            "userId": 1
        }
    });

    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    expect(responseBody.title).toContain('API-Testing');
    expect(responseBody.body).toContain('bar');
    expect(responseBody.userId).toEqual(1);

})