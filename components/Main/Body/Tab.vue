<template>
  <div role="tablist " class="tabs tabs-lifted px-3 tabs-sm sm:tabs-md">
    <NuxtLink
      v-for="item in props.items"
      :key="item.link"
      :to="`${item.link}`"
      role="tab"
      :class="` tab ${getActive(item.link, 'tab-active')}`"
      >{{ item.title }}</NuxtLink
    >
  </div>
</template>

<script lang="ts" setup>
import type { Item } from "~/types/LinkItem"

const { getActive } = useStyle()
const props = defineProps<{ items: Item[] }>()
</script>
