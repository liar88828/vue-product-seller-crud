<template>
  <div>
    {{ text }}
  </div>
</template>

<script lang="ts" setup>
defineProps<{ text: string }>()
</script>
