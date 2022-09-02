import { expect, test } from '@playwright/experimental-ct-react';
import { App } from './App';
import { AppProviders } from './AppProviders';

test.describe('App', () => {
  test('renders', async ({ mount }, testInfo) => {
    // Extend timeout for this test by 30 seconds.
    test.setTimeout(testInfo.timeout + 30000);

    const component = await mount(
      <AppProviders>
        <App />
      </AppProviders>
    );

    await expect(component).toContainText('Ready to create an app?');
  });
});
