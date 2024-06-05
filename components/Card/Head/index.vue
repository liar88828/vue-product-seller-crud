<template>
  <div class="flex justify-between items-center">
    <h2 :class="`font-bold card-title ${props.class ?? 'text-sm sm:text-md '}`">
      {{ getTextSplit(title, 35) }} <slot name="title" />
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
