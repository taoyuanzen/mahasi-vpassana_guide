import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
