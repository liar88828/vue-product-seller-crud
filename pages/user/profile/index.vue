<template>
  <NuxtLayout name="user">
    <div v-if="pending">Loading ...</div>
    <div v-else-if="error || !data?.user">Error</div>
    <PageProfileUser v-else :data="data?.user" />
  </NuxtLayout>
</template>
<script lang="ts" setup>
const { loggedIn } = useUserSession()
console.log(loggedIn)
if (!loggedIn) {
  await navigateTo("/auth/sign-in")
}
const { data, pending, error } = await useFetch("/api/user/profile", {
  onResponseError: async ({ error, response }) => {
    if (error) {
      console.error(error.message, "error message")
      await navigateTo("/auth/sign-in")
    }
  },
})
if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" })
}
</script>
