<template>
  <h2 :class="`card-title ${props.class}`">{{ props.title }}</h2>
  
</template>

<script lang="ts" setup>
const props = defineProps<{ title?: string; class?: string }>()
</script>
