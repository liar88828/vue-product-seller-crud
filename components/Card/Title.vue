<template>
  <h2 :class="[' card-title ', props.class]">
    <slot />
  </h2>
</template>

<script lang="ts" setup>
const props = defineProps<{
  class?: string
}>()
</script>
