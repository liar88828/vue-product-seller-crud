<template>
  <div :class="`card-actions ${props.class}`">
    <slot />
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  class: {
    default: "",
    type: String,
    required: false,
  },
})
</script>
