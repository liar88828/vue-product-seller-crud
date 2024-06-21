<template>
  <div>index</div>
</template>

<script lang="ts" setup>
const { loggedIn } = useUserSession()
if (loggedIn.value) {
  await navigateTo("/user/profile")
} else {
  await navigateTo("/auth/sign-in")
}
</script>
