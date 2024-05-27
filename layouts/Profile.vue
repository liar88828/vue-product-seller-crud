<template>
  <MainBodyTab :items="itemsArray" />
  <slot />
</template>

<script lang="ts" setup>
import { ProductLink } from "~/assets/link/tabLink"
import type { Item } from "~/types/globals/LinkItem"

const itemsArray = ref<Item[]>(ProductLink)
</script>
