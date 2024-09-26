<template>
  <div class="">
    <PageProductTitle :title="'New Products'">
      <button @click="() => {}" class="btn btn-sm">See more</button>
    </PageProductTitle>
    <div class="flex flex-row gap-2 overflow-x-auto">
      <PageProductItem v-for="item in data" :data="item" :isFlex="true" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Product } from "@prisma/client"

defineProps<{
  data: Product[]
}>()
</script>
