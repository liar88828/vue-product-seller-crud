<template>
  <section class="flex items-start gap-4">
    <IconsLocation />
    <div>
      <h3 class="font-medium">Address</h3>
      <p>
        {{ data.address }}
      </p>
    </div>
  </section>

  <section class="flex items-start gap-4">
    <IconsIndustry />
    <div>
      <h3 class="font-medium">Industry</h3>
      <p>{{ data.industry }}</p>
    </div>
  </section>
</template>
<script setup lang="ts">
defineProps<{ data: MarketClient }>()
</script>
