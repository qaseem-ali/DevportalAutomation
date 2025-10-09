// pages/login.js

import { expect } from '@playwright/test';
import fs from 'fs';
export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '#edit-name';
    this.passwordInput = '#edit-pass';
    this.loginButton = '#edit-submit';
  }

  async goto() {
    await this.page.goto('https://developer.api.cait.gov.kw/user/login');
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    console.log('Waiting 20 seconds for CAPTCHA.');
    await this.page.waitForTimeout(20000); // ⏳ waits 20 seconds
    //await this.page.click(this.loginButton);
  }

  async verifyLoginSuccess() {
    await expect(this.page).toHaveURL('https://developer.api.cait.gov.kw/');
  }
  //save-session
  async savesession(){
  await this.page.context().storageState({ path: 'storageState.json' });

  // Confirm saved
  if (fs.existsSync('storageState.json')) {
    console.log('💾 Session saved successfully to storageState.json');
  }
  else {
      console.error('⚠️Failed to save session!');
    } 
}
  async verifyLoginError() {
    await expect(this.page.locator(this.errorMessage)).toBeVisible();
  }
}
