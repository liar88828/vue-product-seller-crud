<template>
  <div class="flex w-full justify-between">
    <div class="basis-1/4">
      <NuxtLink v-if="back" :to="link" class="btn btn-square btn-sm lg:btn-lg">
        <IconsBack class="icons" v-if="back" />
      </NuxtLink>
    </div>

    <div class="flex justify-center basis-1/2 gap-5">
      <!-- src="/img/shopease-white.png" -->
      <NuxtImg src="/img/logo_white.png" class="w-16 h-16 lg:w-20 lg:h-20" />
      <h1 class="card-title lg:text-3xl">ShopEase</h1>
    </div>
    <div class="basis-1/4"></div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  link: { type: String, required: false, default: "#" },
  back: { type: Boolean, required: false, default: true },
})
</script>
