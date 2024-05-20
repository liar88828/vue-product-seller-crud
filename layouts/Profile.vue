<template>
  <Tab :items="itemsArray" />
  <slot />
</template>

<script lang="ts" setup>
import type { Item } from "~/types/LinkItem"

const itemsArray = ref<Item[]>([
  { title: "Profile", link: "#" },
  { title: "Trolly", link: "/trolly" },
  { title: "history", link: "/history" },
])
</script>
