<template>
  <div :tabindex="index" role="button" class="btn btn-ghost btn-sm">
    <div class="indicator">
      <!-- <slot /> -->
      <component :is="icon" class="icons" />
      <span class="badge badge-sm indicator-item badge-primary">
        {{ indicator }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  index: string
  indicator: string
  // text: string
  icon: Component
}>()
</script>
