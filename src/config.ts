import packageJson from '../package.json';

const processEnv = {
  REACT_APP_API_URL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',
  REACT_APP_AZURE_ACTIVE_DIRECTORY_CLIENT_ID: process.env.REACT_APP_AZURE_ACTIVE_DIRECTORY_CLIENT_ID || '',
  REACT_APP_AZURE_ACTIVE_DIRECTORY_TENANT_ID: process.env.REACT_APP_AZURE_ACTIVE_DIRECTORY_TENANT_ID || '',
  REACT_APP_VERSION: process.env.REACT_APP_VERSION || packageJson.version || '1.0.0',
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
