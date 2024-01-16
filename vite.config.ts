import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'PushNotifications',
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/OneSignalSDKWorker.js',
          dest: ''
        }
      ]
    })
  ],
})