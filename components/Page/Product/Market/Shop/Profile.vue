<template>
  <div>Profile</div>
</template>

<script lang="ts" setup>
const { id } = useRoute().params
const profile = await useFetch(`/api/market/profile/:id`)
// defineProps<{ data: ShopMarket["profile"] }>()
</script>
