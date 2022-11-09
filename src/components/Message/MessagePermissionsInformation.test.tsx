import { expect, test } from '@playwright/experimental-ct-react';
import { MessagePermissionsInformation } from './MessagePermissionsInformation';

test.describe('MessagePermissionsInformation', () => {
  test('renders', async ({ mount }) => {
    const component = await mount(<MessagePermissionsInformation />);
    await expect(component).toBeTruthy();
  });

  test('shows text', async ({ mount }) => {
    const component = await mount(
      <div>
        <MessagePermissionsInformation />
      </div>
    );
    await expect(component).toContainText('Explore:');
  });

  test('click on quote to navigate to microsoft docs about user concept overview', async ({ context, mount }) => {
    const component = await mount(
      <div>
        <MessagePermissionsInformation />
      </div>
    );
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      component.getByRole('link', { name: 'Microsoft Docs' }).click(), // Opens a new tab
    ]);
    await newPage.waitForLoadState();
    await expect(await newPage.title()).toBeTruthy();
  });

  test('click on link to navigate to microsoft docs about microsoft graph', async ({ context, mount }) => {
    const component = await mount(
      <div>
        <MessagePermissionsInformation />
      </div>
    );
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      component.getByRole('link', { name: 'Microsoft Graph' }).click(), // Opens a new tab
    ]);
    await newPage.waitForLoadState();
    await expect(await newPage.title()).toBeTruthy();
  });

  test('click on link to navigate to microsoft docs about permissions and consent', async ({ context, mount }) => {
    const component = await mount(
      <div>
        <MessagePermissionsInformation />
      </div>
    );
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      component.getByRole('link', { name: 'Permissions and consent in the Microsoft identity platform' }).click(), // Opens a new tab
    ]);
    await newPage.waitForLoadState();
    await expect(await newPage.title()).toBeTruthy();
  });
});
