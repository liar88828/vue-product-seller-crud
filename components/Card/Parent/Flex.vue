<template>
  <CardInit :class="props.class" :bg="props.bg">
    <CardHead :title="props.title" :class="props.class2">
      <component :is="props.right" v-if="props.right" :link="props.other" />
    </CardHead>
    <div class="overflow-x-auto flex gap-2 sm:gap-3 md:gap-5 rounded-lg">
      <slot />
    </div>
  </CardInit>
</template>

<script lang="ts" setup>
const props = defineProps({
  bg: { type: Boolean, default: true, required: false },

  title: {
    type: String,
    required: true,
  },

  class: String,
  class2: String,
  right: Object as () => Component,
  other: {
    type: String,
    default: "#",
    required: false,
  },
})
</script>
