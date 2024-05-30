<template>
  <NuxtLink :to="link" class="btn sm:btn-outline btn-sm">
    <span> More </span>
    <IconsMore />
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps<{ link: string }>()
</script>
