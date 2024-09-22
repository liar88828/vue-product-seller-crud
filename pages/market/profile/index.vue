<template>
  <NuxtLayout name="market">
    <!-- <h1>hellos</h1> -->
    <ElLoading v-if="pending"/>
    <ElError v-else-if="error || !data"/>
    <Index v-else :data="data?.market"/>
  </NuxtLayout>
</template>


<script lang="ts" setup>
import Index from "./info/index.vue"

const { data, pending, error } = await useFetch("/api/market/profile")
console.log(data)
// const { session } = useUserSession()
// if (session.value.session.createMarket) {
//   throw navigateTo("/market/profile/create")
// }
definePageMeta({
  middleware: ["market"],
})
</script>
