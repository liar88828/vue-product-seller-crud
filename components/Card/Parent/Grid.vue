<template>
  <CardInit :class="props.class">
    <CardHead :title="props.title" :right="props.right" />
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-3">
      <slot />
    </div>
  </CardInit>
</template>
<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  class: String,
  right: Object as () => Component,
})
</script>
