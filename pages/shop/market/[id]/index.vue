<template>redirect</template>

<script lang="ts" setup>
const { id } = useRoute().params
await navigateTo(`/shop/market/home/${id}`)
</script>
