// playwright.config.js (for CAIT project)
import { defineConfig } from '@playwright/test';
console.log('✅ CAIT custom config loaded');
export default defineConfig({
  testDir: './', // use current folder for tests

  // Global timeouts
  timeout: 120000, // 2 minutes per test
  expect: {
    timeout: 10000, // 10s for expect assertions
  },

  use: {
    headless: false,              // run browser visibly
    actionTimeout: 15000,         // wait up to 15s per action
    navigationTimeout: 60000,     // wait up to 60s per page load
    ignoreHTTPSErrors: true,
    viewport: { width: 1280, height: 720 },
    baseURL: 'https://developer.api.cait.gov.kw/', // CAIT base URL
    video: 'retain-on-failure',   // record videos on failure
    screenshot: 'only-on-failure' // capture screenshots on failure
  },

  reporter: [['list']],           // clean test output
});
