<template>
  <Card :class="`image-full ${props.class}`">
    <slot />
  </Card>
</template>

<script lang="ts" setup>
const props = defineProps<{
  class?: string
}>()
</script>
