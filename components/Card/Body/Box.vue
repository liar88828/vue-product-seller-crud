<template>
  <CardBody :class="` ${props.class ?? ' w-40 '}`">
    <slot />
  </CardBody>
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
