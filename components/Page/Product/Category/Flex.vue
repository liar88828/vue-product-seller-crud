<template>
  <CardParentFlex
    :bg="false"
    :flex="true"
    :class="'bg-base-100 '"
    :title="title"
    :class2="'text-sm sm:text-md md:text-lg '"
    :right="Counts"
  >
    <PageProductCategory
      class="my-2"
      v-for="dataIcon in data"
      :key="dataIcon.title"
      :data="dataIcon"
    />
  </CardParentFlex>
</template>

<script setup lang="ts">
import Counts from "~/components/El/Counts.vue"
import type { ItemIcons } from "~/types/globals/icon"

defineProps<{
  data: ItemIcons[]
  title: string
}>()
</script>
