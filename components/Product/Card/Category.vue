<template>
  <div class="card bg-base-100">
    <div class="card-body w-20 sm:w-30 md:w-40 justify-center">
      <h3 class="card-title justify-center">
        <component :is="data.icon" class="h-10 w-10" />
      </h3>
      <div class="card-actions justify-center">
        <NuxtLink :to="data.link"> {{ data.title }} </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { ItemIcons } from "~/types/icon"

defineProps<{ data: ItemIcons }>()
</script>
