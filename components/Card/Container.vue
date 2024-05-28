<template>
  <CardInit :class="props.class">
    <CardHead :title="props.title" :right="props.right" />
    <!-- <div class="flex justify-between">
        <h2 class="card-title">{{ props.title }}</h2>
        <component :is="right" v-if="right" />
      </div> -->
    <CardBodyFlex>
      <!-- class="overflow-x-auto flex flex-row gap-2 sm:gap-5" -->
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

<!-- <ProductCard
v-for="dataRelated in dataRelateds"
:key="dataRelated.id"
:data="dataRelated"
/> -->
