<template>
  <div
    :tabindex="index"
    role="button"
    class="btn btn-ghost btn-sm btn-square ml-5"
  >
    <div :class="['indicator']">
      <slot />
      <span :class="['badge badge-sm indicator-item badge-primary']">
        {{ indicator }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  index: string
  indicator: number
}>()
const isRender = props.indicator > 0
</script>
