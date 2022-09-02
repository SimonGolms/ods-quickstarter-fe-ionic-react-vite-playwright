import type { PlaywrightTestConfig } from '@playwright/experimental-ct-react';
import { devices } from '@playwright/experimental-ct-react';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Desktop Chromium',
      use: {
        browserName: 'chromium',
        viewport: { height: 720, width: 1280 },
      },
    },
    {
      name: 'Desktop Safari',
      use: {
        browserName: 'webkit',
        viewport: { height: 720, width: 1280 },
      },
    },
    {
      name: 'Desktop Firefox',
      use: {
        browserName: 'firefox',
        viewport: { height: 720, width: 1280 },
      },
    },
    {
      name: 'Mobile Chrome',
      use: devices['Pixel 5'],
    },
    {
      name: 'Mobile Safari',
      use: devices['iPhone 13 Pro'],
    },
  ],

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI ? [['junit', { outputFile: 'build/test-results/test/component-test-results.xml' }]] : 'list',

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* The base directory, relative to the config file, for snapshot files created with toMatchSnapshot and toHaveScreenshot. */
  snapshotDir: './__snapshots__',

  testDir: './src',

  /* Maximum time one test can run for (in milliseconds). */
  timeout: 20_000,

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Port to use for Playwright component endpoint. */
    ctPort: 3100,

    ctViteConfig: {
      server: {
        open: false,
      },
    },

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
};

export default config;
