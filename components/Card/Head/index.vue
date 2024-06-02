<template>
  <div class="flex justify-between items-center">
    <h2 :class="`font-bold card-title ${props.class ?? 'text-sm sm:text-md '}`">
      {{ title }} <slot name="title" />
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
