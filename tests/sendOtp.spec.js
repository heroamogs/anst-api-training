const {test, expect} = require ('@playwright/test');
const { generateRandomEmail } = require('../utils/emailGenerator');

test('Send OTP', async({request}) =>{
    const email = generateRandomEmail();

    const response = await request.post('https://test-craft-ecommerce.vercel.app/api/auth/send-otp', {
        data: {email}
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.success).toBe(true);
    expect(responseBody.data.email).toBe(email);
    expect(responseBody.data.otp).toMatch(/^\d{6}$/);

    // Verify OTP:

    // Extract OTP into a veriable:
    const otp = responseBody.data.otp;

    const verifyOtp = await request.post('https://test-craft-ecommerce.vercel.app/api/auth/verify-otp', {
        data: {
            email,
            otp
        }
    });

    expect(verifyOtp.status()).toBe(200);

    const verifyOtpBody = await verifyOtp.json();

    expect(verifyOtpBody.success).toBe(true);
    expect(verifyOtpBody.data.message).toBe('Login successful');
    expect(verifyOtpBody.data.token).toBeTruthy();
    expect(verifyOtpBody.data.user.id).toContain('user');
    expect(verifyOtpBody.data.expiresIn).toEqual(24);


})