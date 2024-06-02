<template>
  <article class="grid sm:grid-cols-3 sm:grid-rows-1 sm:gap-5 gap-4">
    <PageHomeBox class="row-span-2 sm:col-span-2" :data="dataGrid1" />
    <PageHomeBox class="row-span-1 col-span-1" :data="dataGrid2" />
    <PageHomeBox class="row-span-1 col-span-1" :data="dataGrid3" />
  </article>
</template>

<script lang="ts" setup>
import { dataGrid1, dataGrid2, dataGrid3 } from "~/assets/example/home/dataGrid"
</script>
