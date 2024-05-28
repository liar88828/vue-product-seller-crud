<template>
  <CardBody :class="` w-40 ${props.class}`">
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
