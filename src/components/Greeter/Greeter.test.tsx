import { expect, test } from '@playwright/experimental-ct-react';
import { BrowserRouter } from 'react-router-dom';
import { AppProviders } from '../../AppProviders';
import { MOCK_RESPONSE_MICROSOFT_GRAPH_GET_ME } from '../../utils/test/api.me.mock';
import { MsalMock } from '../../utils/test/MsalMock';
import { Greeter } from './Greeter';

test.beforeEach(({ page }) => {
  page.route('**/v1.0/me/', (route) => {
    return route.fulfill({
      body: JSON.stringify(MOCK_RESPONSE_MICROSOFT_GRAPH_GET_ME),
      contentType: 'application/json',
      status: 200,
    });
  });
});

test.describe('Greeter', () => {
  test('renders', async ({ mount }) => {
    const component = await mount(
      <BrowserRouter>
        <MsalMock>
          <AppProviders>
            <div>
              <Greeter />
            </div>
          </AppProviders>
        </MsalMock>
      </BrowserRouter>
    );

    await expect(component).toContainText('Abe');
  });

  test('renders with current time', async ({ mount, page }) => {
    await page.evaluate(() => {
      window.Date.now = () => new Date('April 20 2042 13:37:11').valueOf();
    });

    const component = await mount(
      <BrowserRouter>
        <MsalMock>
          <AppProviders>
            <div>
              <Greeter />
            </div>
          </AppProviders>
        </MsalMock>
      </BrowserRouter>
    );

    await expect(component).toHaveText('Hi, Abe');
  });

  test('renders with defined hour', async ({ mount }) => {
    const component = await mount(
      <BrowserRouter>
        <MsalMock>
          <AppProviders>
            <div>
              <Greeter hour={18} />
            </div>
          </AppProviders>
        </MsalMock>
      </BrowserRouter>
    );

    await expect(component).toHaveText('Good evening, Abe');
  });
});
