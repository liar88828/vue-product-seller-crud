<template>
  <div
    role="tablist"
    class="tabs tabs-lifted px-3 tabs-sm sm:tabs-md lg:tabs-lg"
  >
    <NuxtLink
      v-for="item in props.items"
      :key="item.link"
      :to="`${item.link}/${$route.params.id}`"
      role="tab"
      :class="` tab ${getActive(item.link, 'tab-active')}`"
      >{{ item.title }}</NuxtLink
    >
  </div>
</template>

<script lang="ts" setup>
import type { Item } from "~/types/globals/LinkItem"

const { getActive } = useStyle()
const props = defineProps<{ items: Item[] }>()
</script>
