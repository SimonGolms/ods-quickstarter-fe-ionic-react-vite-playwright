import { expect, test } from '@playwright/experimental-ct-react';
import { MessageAccessSuccess } from './MessageAccessSuccess';

test.describe('MessageAccessSuccess', () => {
  test('renders', async ({ mount }) => {
    const component = await mount(<MessageAccessSuccess />);
    await expect(component).toBeTruthy();
  });

  test('shows text', async ({ mount }) => {
    const text = 'You have the role assigned';
    const component = await mount(<MessageAccessSuccess>{text}</MessageAccessSuccess>);
    await expect(component).toContainText('Access Success');
    await expect(component).toContainText(text);
  });
});
