import { expect, test } from '@playwright/experimental-ct-react';
import { App } from './App';
import { AppProviders } from './AppProviders';

test.describe('App', () => {
  test('renders', async ({ mount }) => {
    const component = await mount(
      <AppProviders>
        <App />
      </AppProviders>
    );

    await expect(component).toContainText('Welcome');
  });
});
