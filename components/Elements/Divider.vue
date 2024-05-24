<template>
  <div class="divider">{{ title ?? "" }}</div>
  <!-- <div class="divider">Default</div> -->
</template>

<script lang="ts" setup>
defineProps<{
  title?: string
}>()
</script>
