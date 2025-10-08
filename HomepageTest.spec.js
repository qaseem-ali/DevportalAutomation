const { test, expect } = require('@playwright/test');
const Homepage = require('./pages/Homepage');

test.describe('CAIT Developer Portal Homepage', () => {
  let home;
  // Runs before every test
  test.beforeEach(async ({ page }) => {
    home = new Homepage(page);
    await home.gotof();
  });

  test('Validate homepage title', async ({ page }) => {
    await expect(page).toHaveTitle(/CAIT/);
  });

  test('Validate homepage URL', async ({ page }) => {
    await expect(page).toHaveURL('https://developer.api.cait.gov.kw/');
  });
  test('Check if Getstarted is clicked', async () => {
    const url = await home.clickongetstarted();
    expect(url).toBe('https://developer.api.cait.gov.kw/get-started');
  });
  test('Check if services is clicked', async () => {
    const url = await home.clickonservices();
    expect(url).toBe('https://developer.api.cait.gov.kw/apis');
  });
  test('Check if Forums is clicked', async () => {
    const url = await home.clickonforums();
    expect(url).toBe('https://developer.api.cait.gov.kw/forum');
  });
  test('Check if Blogs is clicked', async () => {
    const url = await home.clickonblogs();
    expect(url).toBe('https://developer.api.cait.gov.kw/blog');
  });
  test('Check if FAQs is clicked', async () => {
    const url = await home.clickonFAQs();
    expect(url).toBe('https://developer.api.cait.gov.kw/faq');
  });
  test('Check if Contact US is clicked', async () => {
    const url = await home.clickoncontactus();
    expect(url).toBe('https://developer.api.cait.gov.kw/contact');
  });
  test('Check if login is clicked', async () => {
    const url = await home.clickonlogin();
    expect(url).toBe('https://developer.api.cait.gov.kw/user/login');
  });
  test('Check if language change is clicked', async () => {
    const url = await home.clickonlanguage();
    expect(url).toBe('https://developer.api.cait.gov.kw/?language=ar');//for home page only
  });
  test('Check if Signup is clicked', async () => {
    const url = await home.clickonsignup();
    expect(url).toBe('https://developer.api.cait.gov.kw/user/register');
  });
  test('Check if view all apis is clicked', async () => {
    const url = await home.clickonapis();
    expect(url).toBe('https://developer.api.cait.gov.kw/apis');
  });
  test('Check if Getdocumentation is clicked from homepage', async () => {
    const url = await home.clickongetdocumentation();
    expect(url).toBe('https://developer.api.cait.gov.kw/get-started');
  });
  test('Check if Getyourkey is clicked from homepage', async () => {
    const url = await home.clickongetyourkey();
    expect(url).toBe('https://developer.api.cait.gov.kw/user/apps');
  });
  test('Check if Getstarted is clicked from homepage', async () => {
    const url = await home.clickongetstartedhome();
    expect(url).toBe('https://developer.api.cait.gov.kw/contact');
  });
  test('Check if signup is clicked from homepage', async () => {
    const url = await home.clickonsignuphome();
    expect(url).toBe('https://developer.api.cait.gov.kw/user/register');
  });
});
