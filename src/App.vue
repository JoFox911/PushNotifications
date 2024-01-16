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
    Hi there! 14_57
  </div>
</template>

<script setup lang="ts">
import { useOneSignal } from '@onesignal/onesignal-vue3'
import { onBeforeUnmount, onMounted } from 'vue';
const OneSignal = useOneSignal()


console.log("OneSignal obj", OneSignal)

// 'trace', 'debug' 'info' 'warn' 'error'
OneSignal.Debug.setLogLevel('info')


// samples
function permissionChangeListener(permission: any) {
  console.log(`permission changed:`, permission);
  if (permission) {
    console.log(`permission accepted!`);
  }
}

function clickEventListener(event: any) {
  console.log(`click event: ${event}`);
}

function notificationDismissedListener(event: any) {
  console.log(`dismiss event: ${event}`);
}

async function checkPermissionStatus() {
  // const permission = await OneSignal.Notifications.permission

  // // debugger
  // console.log('OneSignal.Notifications.permission', permission)
  // if (permission) {
  //   OneSignal.Notifications.requestPermission();
  // } else {
  //   window.alert('notifications disabled, please allow')
  // }
}


onMounted(() => {
  OneSignal.Notifications.addEventListener("permissionChange", permissionChangeListener);
  OneSignal.Notifications.addEventListener("click", clickEventListener);
  OneSignal.Notifications.addEventListener("dismiss", notificationDismissedListener);

  checkPermissionStatus()
})

onBeforeUnmount(() => {
  OneSignal.Notifications.removeEventListener("permissionChange", permissionChangeListener);
  OneSignal.Notifications.removeEventListener("click", clickEventListener);
  OneSignal.Notifications.removeEventListener("dismiss", notificationDismissedListener);
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
