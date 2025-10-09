// tests/login.spec.js
import { test } from '@playwright/test';
import { LoginPage } from './pages/login';

test.describe('Login Tests', () => {

  test('Successful login with valid credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('abdul.samad4','Pa$$w0rd!');
    //await login.verifyLoginSuccess();
    await login.savesession();
  });

  test('Login fails with invalid credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('wrongUser', 'wrongPass');
    await login.verifyLoginError();
  });

});
