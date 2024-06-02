<template>
  <h2 :class="[replace ? '' : ' card-title ', props.class]">
    {{ props.title }}
  </h2>
  <slot />
</template>

<script lang="ts" setup>
const props = defineProps<{
  replace?: boolean
  title?: string
  class?: string
}>()
</script>
