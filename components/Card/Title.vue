<template>
  <h1 :class="[' card-title ', props.class]">
    <slot />
  </h1>
</template>

<script lang="ts" setup>
const props = defineProps<{
  class?: string
}>()
</script>
