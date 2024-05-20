<template>
  <div role="tablist " class="tabs tabs-lifted px-3">
    <NuxtLink
      v-for="item in props.items"
      :key="item.link"
      :to="`/user${item.link}`"
      role="tab"
      :class="` tab ${$route.path.includes(item.link) ? 'tab-active' : ''}`"
      >{{ item.title }}</NuxtLink
    >
  </div>
</template>

<script lang="ts" setup>
import type { Item } from "~/types/LinkItem"

const props = defineProps<{ items: Item[] }>()
</script>
