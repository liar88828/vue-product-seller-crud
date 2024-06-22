<template><ElLoading v-show="pending" /></template>
<script lang="ts" setup>
const { data, pending } = await useFetch("/api/market/profile/check")
console.log(data.value, "market profile check")
if (data.value) {
  if (data.value.market.create) {
    await navigateTo("/market/profile")
  } else {
    await navigateTo("/market/create")
  }
}
</script>
