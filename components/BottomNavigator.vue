<template>
  <div class="btm-nav btm-nav-xs md:hidden">
    <NuxtLink
      v-for="link in linkMenu"
      :key="link.link"
      :to="link.link"
      class="text-accent"
    >
      <component :is="link.icon" />
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import IconsUser from "~/components/Icons/User.vue"
import IconsHome from "~/components/Icons/Home.vue"
import IconsInfo from "~/components/Icons/Info.vue"
import IconsChartbar from "~/components/Icons/Chartbar.vue"
import type { Component } from "vue"
import { ref } from "vue"

type ItemIcons = {
  link: string
  icon: Component
}

const linkMenu = [
  { link: "/", icon: IconsHome },
  { link: "/user", icon: IconsUser },
  { link: "/info", icon: IconsInfo },
  { link: "/table", icon: IconsChartbar },
]
</script>
