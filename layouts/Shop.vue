<template>
  <ElHeadTab :items="itemsArray" />
  <slot />
</template>

<script lang="ts" setup>
import { ShopMarketLink } from "~/assets/link/tabLink"
import type { Item } from "~/types/globals/LinkItem"

const itemsArray = ref<Item[]>(ShopMarketLink)
</script>
