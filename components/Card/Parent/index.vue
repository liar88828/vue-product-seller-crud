<template>
  <CardInit :class="props.class">
    <CardHead :title="props.title" :class="props.class2">
      <slot name="rightSlot" />
      <component :is="props.right" v-if="props.right" :class="props.class2" />
    </CardHead>
    <slot name="filter" />

    <div class="space-y-2">
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
