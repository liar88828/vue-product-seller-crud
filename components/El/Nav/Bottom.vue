<template>
  <section class="btm-nav md:hidden shadow-top">
    <NuxtLink
      v-for="item in linkMenu"
      :key="item.link"
      :to="item.link"
      :class="['text-primary', isLink(item.link) ? ' active' : '']"
    >
      <component :is="item.icon" class="h-6 w-6" />
      <p class="text-xs">
        {{ item.title }}
      </p>
    </NuxtLink>
  </section>
  <!--  -->
  <section
    class="hidden md:block fixed bg-base-100 z-50 p-2 space-y-5 ml-2 rounded-lg shadow"
  >
    <NuxtLink
      v-for="item in linkMenu"
      :key="item.link"
      :to="item.link"
      :class="[
        'text-primary flex flex-col items-center gap-1',
        isLink(item.link) ? ' active' : '',
      ]"
    >
      <component :is="item.icon" class="h-6 w-6" />
      <p class="text-xs">{{ item.title }}</p>
    </NuxtLink>
  </section>
</template>

<script lang="ts" setup>
import { linkMenu } from "~/assets/link/navigator/bottomLink"
const route = useRoute()
const isLink = (link: string) => {
  return route.path.includes(link.split("/")[1])
}
</script>
