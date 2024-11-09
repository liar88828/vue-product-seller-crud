<template>
  <section class="flex justify-between mb-2">
    <div class="text-lg font-bold">{{ title }}</div>
    <slot />
  </section>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<style></style>
