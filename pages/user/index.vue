<template>
  <div>index</div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "user",
})
const { loggedIn } = useUserSession()
if (loggedIn.value) {
  await navigateTo("/user/profile")
} else {
  await navigateTo("/auth/sign-in")
}
</script>
