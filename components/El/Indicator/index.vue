<template>
  <div class="indicator">
    <span class="indicator-item badge badge-primary mr-6">{{ count }}</span>
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  count: number
}>()
</script>
