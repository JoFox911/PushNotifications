<template>
  <button class="refresh" @click="checkNotificationsStatus">

    <svg fill="#ffffff" height="16px%" width="16px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 489.645 489.645" xml:space="preserve" stroke="#ffffff">
      <g id="SVGRepo_bgCarrier" stroke-width="0" />
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
      <g id="SVGRepo_iconCarrier">
        <g>
          <path
            d="M460.656,132.911c-58.7-122.1-212.2-166.5-331.8-104.1c-9.4,5.2-13.5,16.6-8.3,27c5.2,9.4,16.6,13.5,27,8.3 c99.9-52,227.4-14.9,276.7,86.3c65.4,134.3-19,236.7-87.4,274.6c-93.1,51.7-211.2,17.4-267.6-70.7l69.3,14.5 c10.4,2.1,21.8-4.2,23.9-15.6c2.1-10.4-4.2-21.8-15.6-23.9l-122.8-25c-20.6-2-25,16.6-23.9,22.9l15.6,123.8 c1,10.4,9.4,17.7,19.8,17.7c12.8,0,20.8-12.5,19.8-23.9l-6-50.5c57.4,70.8,170.3,131.2,307.4,68.2 C414.856,432.511,548.256,314.811,460.656,132.911z" />
        </g>
      </g>
    </svg>
  </button>

  <div>
    <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    <img src="/onesignal.svg" class="logo" alt="onesignal logo" />
  </div>

  <div>
    <h2>Hi there!</h2>

    <div class="test">

      <span>is browser supports web push? {{ isSupported }} </span>

      <template v-if="isSupported">

        <span>is notifications permission prompted? {{ isPermissionPrompted }}</span>

        <button v-if="!isPermissionPrompted" @click="requestPermission">
          Request permission
        </button>
      </template>

      <template v-if="isSupported && isPermissionPrompted">
        <span>is subscribed? {{ isSubscribedToNotifications }}</span>

        <button v-if="isSubscribedToNotifications" @click="unsubscribe">
          Unsubscribe
        </button>

        <button v-if="!isSubscribedToNotifications" @click="subscribe">
          Subscribe
        </button>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOneSignal } from '@onesignal/onesignal-vue3'
import { onBeforeUnmount, onMounted, ref } from 'vue'
const OneSignal = useOneSignal()

const isSupported = ref(false)
const isPermissionPrompted = ref(false)
const isSubscribedToNotifications = ref(false)

console.log("OneSignal obj", OneSignal)

// 'trace', 'debug' 'info' 'warn' 'error'
OneSignal.Debug.setLogLevel('info')


// samples
function permissionChangeListener(permission: any) {
  console.log(`permission changed:`, permission)
  if (permission) {
    console.log(`permission accepted!`)
  }
}

function clickEventListener(event: any) {
  console.log(`click event: ${event}`)
}

function notificationDismissedListener(event: any) {
  console.log(`dismiss event: ${event}`)
}

async function checkNotificationsStatus() {
  isPermissionPrompted.value = await OneSignal.Notifications.permission
  isSupported.value = OneSignal.Notifications.isPushSupported()
  isSubscribedToNotifications.value = OneSignal.User.PushSubscription.optedIn ?? false
}


async function unsubscribe() {
  await OneSignal.User.PushSubscription.optOut()
  checkNotificationsStatus()
}

async function subscribe() {
  await OneSignal.User.PushSubscription.optIn()
  checkNotificationsStatus()
}

async function requestPermission() {
  await OneSignal.Notifications.requestPermission()
  checkNotificationsStatus()
}

onMounted(() => {
  OneSignal.Notifications.addEventListener("permissionChange", permissionChangeListener)
  OneSignal.Notifications.addEventListener("click", clickEventListener)
  OneSignal.Notifications.addEventListener("dismiss", notificationDismissedListener)

  setTimeout(() => {
    checkNotificationsStatus()
  }, 1000)
})

onBeforeUnmount(() => {
  OneSignal.Notifications.removeEventListener("permissionChange", permissionChangeListener)
  OneSignal.Notifications.removeEventListener("click", clickEventListener)
  OneSignal.Notifications.removeEventListener("dismiss", notificationDismissedListener)
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
  filter: drop-shadow(0 0 2em #f03d25aa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.test {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.refresh {
  position: absolute;
  top: 16px;
  right: 16px;
}
</style>
