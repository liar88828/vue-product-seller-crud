<template>
  <CardInit :class="props.class">
    <CardHead :title="props.title" :right="props.right" />
    <div class="grid gap-2">
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
