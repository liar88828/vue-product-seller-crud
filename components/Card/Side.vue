<template>
  <Card :class="`card-side ${props.class}`" :bg="props.bg">
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
  bg: {
    type: Boolean,
    required: false,
    default: true,
  },
})
</script>
