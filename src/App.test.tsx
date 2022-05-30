import { act } from '@testing-library/react';
import { App } from './App';
import { customRender } from './utils/test-utils';

test('App renders without crashing', async () => {
  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () => {
    const { container } = customRender(<App />);
    expect(container).toBeTruthy();
  });
});
