<template>
  <section class="bg-base-100 sm:py-12 py-5 shadow">
    <div class="max-w-6xl px-4 mx-auto">
      <div class="grid gap-6 md:gap-10">
        <div>
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold">
            Technical Specifications
          </h2>
          <p class="mt-2 md:text-xl">
            Discover the intricate details that make the Acme Chronograph a true
            masterpiece.
          </p>
        </div>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="grid gap-2" v-for="item in data" :key="item.t">
            <h3 class="text-lg font-semibold">{{ item.t }}</h3>
            <p class="">{{ item.p }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { DataTechnicalSpc } from "~/types/product/item"

defineProps<{
  data: DataTechnicalSpc[]
}>()
</script>
