<template>
  <div>
    {{ title }}
    Error...
  </div>
</template>

<script lang="ts" setup>
defineProps<{ title?: string }>()
</script>
