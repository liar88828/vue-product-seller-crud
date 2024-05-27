<template>
  <LayCardWrap :class="props.class">
    <div class="flex justify-between">
      <h2 class="card-title">{{ props.title }}</h2>
      <component :is="right" v-if="right" />
    </div>
    <div class="overflow-x-auto flex flex-row gap-2 sm:gap-5">
      <slot />
    </div>
  </LayCardWrap>
</template>

<script setup lang="ts">
import type { Component } from "vue"

const props = defineProps<{
  title: string
  class: string //bg-info/10
  right?: Component
}>()
</script>

<!-- <ProductCard
v-for="dataRelated in dataRelateds"
:key="dataRelated.id"
:data="dataRelated"
/> -->
