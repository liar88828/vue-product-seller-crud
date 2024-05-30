<template>
  <CardInit>
    <CardHead :title="props.title" :class="'text-xl sm:text-2xl md:text-3xl'">
      <component :is="props.right" v-if="props.right" :link="props.other" />
    </CardHead>
    <div class="flex flex-col space-y-3">
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
