<template>
  <h1>Redirect</h1>
</template>

<script lang="ts" setup>
const route = useRoute()
console.log(route)
// await navigateTo(`/product/detail/${route.path}`)
</script>
