<template>
  <section
    :class="[
      'shadow-xl card',
      props.compact ? ' card-compact lg:card-normal' : '',
      props.bg ? ' bg-base-100 ' : '',
      props.class,
    ]"
  >
    <slot />
  </section>
</template>

<script lang="ts" setup>
const props = defineProps({
  bg: { type: Boolean, default: true, required: false },
  class: {
    default: "",
    type: String,
    required: false,
  },
  compact: {
    default: true,
    type: Boolean,
    required: false,
  },
})
// console.log(props.bg, "bg")
</script>
