import { render, RenderOptions } from '@testing-library/react';
import { AppProviders } from '../AppProviders';

function AllTheProviders({ children }: React.PropsWithChildren<{}>) {
  return <AppProviders>{children}</AppProviders>;
}

export function customRender(ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return render(ui, { wrapper: AllTheProviders, ...options });
}
