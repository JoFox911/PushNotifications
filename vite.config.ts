import { defineConfig } from 'vite'
// import { readFileSync } from 'fs'
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// const sslCert = readFileSync('./cert.pem')
// const sslKey = readFileSync('./key.pem')

// https://vitejs.dev/config/
export default defineConfig({
  // base: 'PushNotifications',
  // server: {
  //   https: {
  //     key: sslKey,
  //     cert: sslCert,
  //   },
  // },
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
