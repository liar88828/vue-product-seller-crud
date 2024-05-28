<template>
  <div class="flex justify-between">
    <h2 :class="`card-title ${props.class ?? 'text-sm sm:text-md'}`">
      {{ title }}
    </h2>
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  class?: string
}>()
</script>
