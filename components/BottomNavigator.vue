<template>
  <div class="btm-nav btm-nav-sm md:hidden">
    <NuxtLink
      v-for="link in linkMenu"
      :key="link.link"
      :to="link.link"
      :class="`text-accent ${
        $route.path.includes(link.link) ? ' active' : ''
      } `"
    >
      <component :is="link.icon" class="h-6 w-6" />
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import IconsUser from "~/components/Icons/User.vue"
import IconsHome from "~/components/Icons/Home.vue"
import IconsShop from "~/components/Icons/Shop.vue"
import IconsSell from "~/components/Icons/Sell.vue"
import type { Component } from "vue"

type ItemIcons = {
  link: string
  icon: Component
}

const linkMenu: ItemIcons[] = [
  { link: "/home", icon: IconsHome },
  { link: "/shop", icon: IconsShop },
  { link: "/sell", icon: IconsSell },
  { link: "/user", icon: IconsUser },
]
</script>
