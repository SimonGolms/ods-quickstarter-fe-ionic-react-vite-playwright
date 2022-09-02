import packageJson from '../package.json';

const processEnv = {
  VITE_API_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  VITE_AZURE_ACTIVE_DIRECTORY_CLIENT_ID: import.meta.env.VITE_AZURE_ACTIVE_DIRECTORY_CLIENT_ID || '',
  VITE_AZURE_ACTIVE_DIRECTORY_TENANT_ID: import.meta.env.VITE_AZURE_ACTIVE_DIRECTORY_TENANT_ID || '',
  VITE_VERSION: import.meta.env.VITE_VERSION || packageJson.version || '1.0.0',
};

const injectedEnv = window.injectedEnv || {};

export const env: typeof processEnv = {
  ...processEnv,
  ...injectedEnv,
};

declare global {
  interface Window {
    injectedEnv: Partial<typeof processEnv>;
  }
}
