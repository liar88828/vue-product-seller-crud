<template>
  <NuxtLayout name="market">
    <!-- <h1>hellos</h1> -->
    <ElLoading v-if="pending" />
    <ElError v-else-if="error || !data" />
    <Index v-else :data="data.market" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import Index from "~/pages/market/profile/index.vue"

const { id } = useRoute().params
const { data, pending, error } = await useFetch(`/api/market/profile/:id`, {
  params: { id },
  method: "GET",
})
</script>
