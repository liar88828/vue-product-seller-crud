<template>index {{ data?.user }}</template>

<script lang="ts" setup>
await navigateTo("/home")

const { data, pending, error,   } = await useFetch("/api/user")
</script>
