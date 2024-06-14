<template>index {{ data?.user }}</template>

<script lang="ts" setup>
await navigateTo("/home")

const { data, pending, error, refresh } = await useFetch("/api/user")
</script>
