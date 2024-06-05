<template>
  <section class="navbar bg-base-100 shadow h-16 px-6">
    <div class="flex-1 gap-2 items-center">
      <NuxtLink href="/" class="hidden sm:block">
        <NuxtImg src="/img/logo_white.png" width="50" height="50" />
      </NuxtLink>
      <Search />
    </div>

    <div class="flex-none">
      <ElDropDownTrolly />
      <ElTheme />
      <!-- if has login -->
      <!-- <ElDropDownNotify v-if="!hidden" /> -->
      <!-- <ElDropDownAccount v-if="!hidden" /> -->
      <!-- if has not login -->
    </div>
  </section>
</template>

<script lang="ts" setup>
import Search from "./Search.vue"
const search = ref()
const route = useRoute()
const hidden = computed(() => route.path.includes("shop"))
</script>
