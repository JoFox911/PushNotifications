<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <div>
    Hi there!
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

declare global {
  interface Window {
    OneSignalDeferred?: any[]
  }
}


onMounted(() => {
  window.OneSignalDeferred = window.OneSignalDeferred || []

  window.OneSignalDeferred.push((OneSignal: any) => {
    
    OneSignal.init({
      appId: "a72475a8-840c-4629-97e3-28912437df92",
      safari_web_id: "web.onesignal.auto.2e21fe47-8329-4413-bae9-ecef4da3342d",
      notifyButton: {
        enable: true,
      },
    })
  })

})

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
