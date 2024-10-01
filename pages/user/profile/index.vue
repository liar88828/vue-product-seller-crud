<template>
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <PageProfileUser v-else :data="data?.user" />
</template>
<script lang="ts" setup>
// definePageMeta({
//   middleware: ["market"],
// })
definePageMeta({
  layout: "user",
})
const { clear } = useUserSession()
const { data, pending, error } = await useFetch("/api/user/profile", {
  onResponseError: async ({ error, response }) => {
    console.log(response.statusText, "response")
    if (response.statusText.includes("not found")) {
      console.log("not found")
      clear()
    }
  },
})
</script>
