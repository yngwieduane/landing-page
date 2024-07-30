// vite.config.ts
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    port: 5001,
    proxy: {
        '/ExternalApis':{
            target: 'https://integration.psi-crm.com',
            changeOrigin:true,
            secure: true,
        }
    }
  }
})
