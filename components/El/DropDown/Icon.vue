<template>
  <div :tabindex="index" role="button" class="btn btn-ghost btn-sm">
    <div class="indicator">
      <!-- <slot /> -->
      <component :is="icon" class="h-6 w-6 sm:h-7 sm:w-7" />
      <!-- <IconsTrolley class="h-6 w-6" /> -->
      <span class="badge badge-sm indicator-item badge-primary">
        {{ indicator }}
      </span>
    </div>
    <!-- <p class="hidden sm:block">{{ text }}</p> -->
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
