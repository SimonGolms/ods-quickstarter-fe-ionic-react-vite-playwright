import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };

  return {
    plugins: [react()],
    server: {
      open: Boolean(process.env.BROWSER),
      port: Number(process.env.PORT) ?? 5173,
    },
  };
});
