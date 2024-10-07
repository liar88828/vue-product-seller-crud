<template>
  <section class="btm-nav md:hidden shadow-top">
    <NuxtLink
      v-for="link in linkMenu"
      :key="link.link"
      :to="link.link"
      :class="[
        'text-primary',
        $route.path.includes(link.link) ? ' active' : '',
      ]"
    >
      <component :is="link.icon" class="h-6 w-6" />
      <p class="text-xs">{{ link.title }}</p>
    </NuxtLink>
  </section>
  <!--  -->
  <section
    class="hidden md:block fixed bg-base-100 z-50 p-2 space-y-5 ml-2 rounded-lg shadow"
  >
    <NuxtLink
      v-for="link in linkMenu"
      :key="link.link"
      :to="link.link"
      :class="[
        'text-primary flex flex-col items-center gap-1',
        $route.path.includes(link.link) ? ' active' : '',
      ]"
    >
      <component :is="link.icon" class="h-6 w-6" />
      <p class="text-xs">{{ link.title }}</p>
    </NuxtLink>
  </section>
</template>

<script lang="ts" setup>
import { linkMenu } from "~/assets/link/navigator/bottomLink"
</script>
