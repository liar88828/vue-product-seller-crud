<template>
  <ElHeadTab :items="itemsArray" />
  <slot />
</template>

<script lang="ts" setup>
import { UserLink } from "~/assets/link/tabLink"
import type { Item } from "~/types/globals/LinkItem"

const itemsArray = ref<Item[]>(UserLink)
</script>
