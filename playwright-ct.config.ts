import { defineConfig, devices } from "@playwright/experimental-ct-react";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Configure projects for major browsers */
  projects: [
    {
      name: "Desktop Chromium",
      use: devices["Desktop Chrome"],
    },
    {
      name: "Desktop Safari",
      use: devices["Desktop Safari"],
    },
    {
      name: "Desktop Firefox",
      use: devices["Desktop Firefox"],
    },
    {
      name: "Mobile Chrome",
      use: devices["Pixel 5"],
    },
    {
      name: "Mobile Safari",
      use: devices["iPhone 13 Pro"],
    },
  ],

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI ? [["junit", { outputFile: "build/test-results/test/component-test-results.xml" }]] : "list",

  /**
   * Retry on CI only - Test that passes on a second retry is 'flaky'
   * see: https://playwright.dev/docs/api/class-testcase#test-case-outcome
   */
  retries: process.env.CI ? 2 : 0,

  /* The base directory, relative to the config file, for snapshot files created with toMatchSnapshot and toHaveScreenshot. */
  snapshotDir: "./__snapshots__",

  testDir: "./src",

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
    trace: "on-first-retry",
  },

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
});
