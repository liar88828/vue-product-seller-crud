<template>
  <CardInit :class="props.class">
    <CardHead :title="props.title" :class="props.class2" :right="props.right" />
    <div class="grid1">
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
  class2: String,
  right: Object as () => Component,
})
</script>
