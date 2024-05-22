<template>
  <div class="">
    <div class="max-w-6xl mx-auto py-12 px-4">
      <h2 class="text-2xl font-bold mb-6">Customer Reviews</h2>
      <div class="grid gap-6">
        <ProductReviewProduct :data="dataPreview" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  dataPreview: { name: string; time: string; text: string; img: string }
}>()
</script>
