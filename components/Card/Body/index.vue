<template>
  <div :class="`card-body  ${props.class} `">
    <slot />
  </div>
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
