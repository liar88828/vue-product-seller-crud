<template>
  <CardInit :class="props.class">
    <CardHead :title="props.title" :right="props.right" />
    <CardBodyFlex>
      <slot />
    </CardBodyFlex>
  </CardInit>
</template>

<script setup lang="ts">
import type { Component } from "vue"

const props = defineProps<{
  title: string
  class: string //bg-info/10
  right?: Component
}>()
</script>
