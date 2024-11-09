<template>
  <section
    class="carousel w-full sm:grid sm:grid-cols-3 sm:grid-rows-1 sm:gap-5 gap-4"
  >
    <PageHomeBox
      id="item1"
      class="carousel-item row-span-2 sm:col-span-2"
      :data="dataGrid1"
    />
    <PageHomeBox
      id="item2"
      class="carousel-item row-span-1 col-span-1"
      :data="dataGrid2"
    />
    <PageHomeBox
      id="item3"
      class="carousel-item row-span-1 col-span-1"
      :data="dataGrid3"
    />
  </section>
</template>

<script lang="ts" setup>
import { dataGrid1, dataGrid2, dataGrid3 } from "~/assets/example/home/dataGrid"
</script>
