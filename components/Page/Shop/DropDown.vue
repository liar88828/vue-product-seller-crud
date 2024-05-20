<template>
  <div class="grid gap-2">
    <h3 class="font-semibold text-lg">Categories</h3>
    <div class="grid gap-1">
      <a
        v-for="category in categories"
        class="text-sm font-medium hover:underline underline-offset-4"
        :href="category.link"
      >
        {{ category.title }}
      </a>
    </div>

    
  </div>
</template>

<script lang="ts" setup>
import { categories, colors, prices } from "~/assets/shopLink"
</script>
