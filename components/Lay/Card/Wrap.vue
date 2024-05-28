<template>
  <CardInit :class="`card card-compact ${props.class}`">
    <slot />
  </CardInit>
</template>

<script lang="ts" setup>
const props = defineProps({
  class: {
    default: "",
    type: String,
    required: false,
  },
})
</script>
