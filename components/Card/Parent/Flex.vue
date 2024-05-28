<template>
  <CardInit :class="props.class">
    <CardHead :title="props.title" :class="props.class2" :right="props.right" />
    <div class="overflow-x-auto flex flex-row gap-2 sm:gap-3 md:gap-5">
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
  flex: {
    type: Boolean,
    default: false,
    required: false,
  },
  class: String,
  class2: String,
  right: Object as () => Component,
})

// const classProps = ref(false)
</script>
