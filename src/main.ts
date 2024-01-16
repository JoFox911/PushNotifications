import { createApp } from 'vue'
import OneSignalVuePlugin from '@onesignal/onesignal-vue3'
import './style.css'
import App from './App.vue'

createApp(App).use(OneSignalVuePlugin, {
    // appId: "a72475a8-840c-4629-97e3-28912437df92",
    appId: '306a5c51-b630-4195-9fb8-71d0b22637ce',
    notifyButton: {
        enable: true,
    }
}).mount('#app')
