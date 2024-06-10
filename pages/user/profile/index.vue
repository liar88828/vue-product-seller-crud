<template>
  <NuxtLayout name="profile">
    <!-- @vue-expect-error -->
    <PageProfileUser :data="data?.user" />
  </NuxtLayout>
</template>
<script lang="ts" setup>
const { data } = await useFetch("/api/user/")
if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" })
}
</script>
