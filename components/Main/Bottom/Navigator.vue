<template>
  <div class="btm-nav md:hidden ">
    <NuxtLink
      v-for="link in linkMenu"
      :key="link.link"
      :to="link.link"
      :class="`text-accent ${
        $route.path.includes(link.link) ? ' active' : ''
      } `"
    >
      <component :is="link.icon" class="h-6 w-6" />
      <p class="text-xs">{{ link.title }}</p>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { linkMenu } from "~/assets/link/navigator/bottomLink"
</script>
