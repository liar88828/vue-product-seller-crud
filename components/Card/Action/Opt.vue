<template>
  <CardActionBetween>
    <div class="">
      <component :is="left" v-if="left" />
    </div>
    <div class="">
      <component :is="right" v-if="right" />
    </div>
  </CardActionBetween>
</template>

<script lang="ts" setup>
const props = defineProps<{
  left?: Component
  right?: Component
}>()
</script>
