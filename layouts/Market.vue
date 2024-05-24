<template>
  <MainTab :items="itemsArray" />
  <slot />
</template>

<script lang="ts" setup>
import { MarketLink } from "~/assets/shopLink"
import type { Item } from "~/types/LinkItem"

const itemsArray = ref<Item[]>(MarketLink)
</script>
