<template>
  <div class="grid gap-2">
    <h3 class="font-semibold text-lg">Categories</h3>
    <div class="grid gap-1">
      <a
        v-for="data in staticLink.category.list"
        class="text-sm font-medium hover:underline underline-offset-4"
        :href="data.link"
      >
        {{ data.title }}
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { staticLink } from "~/assets/link/shopLink"
</script>
