import { expect, test } from '@playwright/experimental-ct-react';
import { MessageAccessInformation } from './MessageAccessInformation';

test.describe('MessageAccessInformation', () => {
  test('renders', async ({ mount }) => {
    const component = await mount(<MessageAccessInformation />);
    expect(component).toBeTruthy();
  });

  test('shows text', async ({ mount }) => {
    const component = await mount(
      <div>
        <MessageAccessInformation />
      </div>
    );
    await expect(component).toContainText('Explore:');
  });

  test('click on quote to navigate to microsoft docs about role-based access control', async ({ context, mount }) => {
    const component = await mount(
      <div>
        <MessageAccessInformation />
      </div>
    );
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      component.getByRole('link', { name: 'Microsoft Docs' }).click(), // Opens a new tab
    ]);
    await newPage.waitForLoadState();
    expect(await newPage.title()).toBeTruthy();
  });

  test('click on link to navigate to microsoft docs about app roles', async ({ context, mount }) => {
    const component = await mount(
      <div>
        <MessageAccessInformation />
      </div>
    );
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      component.getByRole('link', { name: 'How to add app roles in Azure AD apps' }).click(), // Opens a new tab
    ]);
    await newPage.waitForLoadState();
    expect(await newPage.title()).toBeTruthy();
  });
});
