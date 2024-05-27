<template>
  <LayCardWrap :class="props.class">
    <div class="flex justify-between">
      <h2 class="card-title">{{ props.title }}</h2>
      <component :is="right" v-if="right" />
    </div>
    <div :class="classProps">
      <slot />
    </div>
  </LayCardWrap>
</template>
<script lang="ts" setup>
// import type { Component } from "vue"

const props = defineProps({
  title: String,
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
