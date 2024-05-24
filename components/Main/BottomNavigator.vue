<template>
  <div class="btm-nav md:hidden">
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
import IconsUser from "~/components/Icons/User.vue"
import IconsHome from "~/components/Icons/Home.vue"
import IconsShop from "~/components/Icons/Shop.vue"
import IconsSell from "~/components/Icons/Sell.vue"
import IconsMarket from "~/components/Icons/Market.vue"
import type { ItemIcons } from "~/types/icon"

const linkMenu: ItemIcons[] = [
  { link: "/home", icon: IconsHome, title: "Home" },
  { link: "/shop", icon: IconsShop, title: "Shop" },
  { link: "/sell", icon: IconsSell, title: "Sell" },
  { link: "/user", icon: IconsUser, title: "User" },
  { link: "/market", icon: IconsMarket, title: "Market" },
]
</script>
