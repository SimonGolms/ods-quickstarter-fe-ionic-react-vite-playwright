import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';
import manifest from './public/manifest.json';

export const pwaOptions: Partial<VitePWAOptions> = {
  base: '/',
  devOptions: {
    enabled: true,
    navigateFallback: 'index.html',
    type: 'module',
  },
  manifest,
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };

  return {
    plugins: [react(), VitePWA(pwaOptions)],
    server: {
      open: Boolean(process.env.BROWSER),
      port: Number(process.env.PORT) || 5173,
    },
  };
});
