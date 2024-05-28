<template>
  <section :class="`shadow-xl card bg-base-100 card-compact ${props.class}`">
    <slot />
  </section>
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
