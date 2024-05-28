<template>
  <div class="overflow-x-auto">
    <table :class="props.class">
      <slot />
    </table>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ class?: string }>()
</script>
