<template>
  <Card :class="`card-compact ${props.class}`">
    <slot />
  </Card>
</template>

<script lang="ts" setup>
const props = defineProps({
  class: {
    type: String,
    required: false,
    default: "",
  },
})
</script>
