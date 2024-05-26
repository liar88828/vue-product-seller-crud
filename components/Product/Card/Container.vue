<template>
  <article :class="`card card-compact ${props.class}`">
    <div class="card-body">
      <h2 class="card-title ">{{ props.title }}</h2>
      <div class="overflow-x-auto flex flex-row gap-2 sm:gap-6">
        <slot />
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  class: string //bg-info/10
}>()
</script>

<!-- <ProductCard
v-for="dataRelated in dataRelateds"
:key="dataRelated.id"
:data="dataRelated"
/> -->
