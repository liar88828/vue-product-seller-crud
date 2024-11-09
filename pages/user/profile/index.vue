<template>
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <PageProfile v-else :data="data?.user" />
</template>
<script lang="ts" setup>
definePageMeta({
  layout: "user",
})
const { clear } = useUserSession()

const { data, error, pending } = await useUser()
  .findUserBySession()
  .then((data) => {
    if (!data.error.value) {
      return data
    }
    if (data.error.value.statusText === undefined) {
      return data
    }
    if (data.error.value.statusText.includes("not found")) {
      console.log("not found")
      clear()
    }
    return data
  })
</script>
