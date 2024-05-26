<template>
  <section :class="`card card-compact ${props.class}`">
    <div class="card-body">
      <slot />
    </div>
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
