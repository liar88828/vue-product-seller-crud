<template>
  <MainBodyTab :items="itemsArray" />
  <slot />
</template>

<script lang="ts" setup>
import { MarketLink } from "~/assets/link/tabLink"
import type { Item } from "~/types/globals/LinkItem"

const itemsArray = ref<Item[]>(MarketLink)
</script>
