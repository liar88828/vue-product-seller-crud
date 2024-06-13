<template>
  <NuxtLayout name="profile">
    <div v-if="pending">Loading ...</div>
    <div v-else-if="error || !data?.user">Error</div>
    <PageProfileUser v-else :data="data?.user" />
  </NuxtLayout>
</template>
<script lang="ts" setup>
const { data, pending, error } = await useFetch("/api/user/")
if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" })
}
</script>
