<template>
  <div :class="['indicator']">
    <slot />
    <span
      :class="['badge badge-xs sm:badge-sm indicator-item badge-primary mr-1']"
    >
      {{ indicator }}
    </span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  indicator: number
}>()
const isRender = props.indicator > 0
</script>
