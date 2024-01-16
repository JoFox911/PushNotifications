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
    Hi there! 14_10
  </div>
</template>

<script setup lang="ts">
declare global {
  interface Window {
    OneSignalDeferred?: any[]
  }
}
// window.OneSignalDeferred = window.OneSignalDeferred || []

// window.OneSignalDeferred.push((OneSignal: any) => {
//   console.log('OneSignal', OneSignal)
//   OneSignal.init({
//     appId: "306a5c51-b630-4195-9fb8-71d0b22637ce",
//     safari_web_id: "web.onesignal.auto.44e66786-7e94-4ade-8822-3a1650cda83f",
//     notifyButton: {
//       enable: true,
//     }
//   })
// })

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
