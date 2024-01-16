import { createApp } from 'vue'
import OneSignalVuePlugin from '@onesignal/onesignal-vue3'
import './style.css'
import App from './App.vue'

createApp(App).use(OneSignalVuePlugin, {
    appId: '306a5c51-b630-4195-9fb8-71d0b22637ce',
}).mount('#app')
