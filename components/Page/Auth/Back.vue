<template>
  <div class="flex w-full justify-between">
    <div class="basis-1/4">
      <NuxtLink :to="link" class="btn btn-square btn-sm lg:btn-lg">
        <IconsBack class="icons" />
      </NuxtLink>
    </div>

    <div class="flex justify-center basis-1/2">
      <NuxtImg
        src="/img/shopease-white.png"
        class="w-16 h-16 lg:w-32 lg:h-32"
      />
      <h1 class="card-title lg:text-3xl">ShopEase</h1>
    </div>
    <div class="basis-1/4"></div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ link: string }>()
</script>
