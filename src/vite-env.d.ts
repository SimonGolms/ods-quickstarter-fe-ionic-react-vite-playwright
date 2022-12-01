/// <reference types="vite/client" />

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_AZURE_ACTIVE_DIRECTORY_CLIENT_ID: string;
  readonly VITE_AZURE_ACTIVE_DIRECTORY_TENANT_ID: string;
  readonly VITE_VERSION: string;
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions, @typescript-eslint/no-unused-vars
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
