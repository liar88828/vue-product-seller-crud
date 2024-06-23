<template>
  <NuxtLayout name="market">
    <ElLoading v-if="pending"/>
    <ElError v-else-if="error || !data"/>
    <!-- @vue-expect-error -->
    <PageProfileMarket v-else :data="data?.market"/>
  </NuxtLayout>
</template>
<script lang="ts" setup>

import { definePageMeta } from "#imports";

const { data, pending, error } = await useFetch("/api/market/profile")

// const { session } = useUserSession()
// if (session.value.session.createMarket) {
//   throw navigateTo("/market/profile/create")
// }
definePageMeta({
  middleware: ['market']
})
</script>
