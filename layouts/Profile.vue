<template>
  <Tab :items="itemsArray" />
  <slot />
</template>

<script lang="ts" setup>
import type { Item } from "~/types/LinkItem"

const itemsArray = ref<Item[]>([
  { title: "Profile", link: "/user/profile" },
  { title: "Trolly", link: "/user/trolly" },
  { title: "history", link: "/user/history" },
])
</script>
