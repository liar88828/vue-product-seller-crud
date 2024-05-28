<template>
  <CardInit :class="props.class">
    <CardHead :title="props.title" :right="props.right" />

    <div :class="classProps">
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
  grid: {
    type: Boolean,
    default: false,
    required: false,
  },
  flex: {
    type: Boolean,
    default: false,
    required: false,
  },
  class: String,
  right: Object as () => Component,
})

// const classProps = ref(false)
const classProps = computed(() => {
  if (props.grid) {
    return "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
  }
  if (props.flex) {
    return "overflow-x-auto flex flex-row gap-2 sm:gap-5"
  }
  return "grid gap-2"
})
</script>
