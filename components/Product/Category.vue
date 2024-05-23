<template>
  <div class="card bg-base-100">
    <div class="card-body w-40 justify-center">
      <h3 class="card-title justify-center">
        <IconsGrapes class="h-10 w-10" />
      </h3>
      <div class="card-actions justify-center">
        <NuxtLink to="#"> Fruit </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  data: {
    name: string
    brand: string
    price: number
    img: string
  }
}>()
</script>
