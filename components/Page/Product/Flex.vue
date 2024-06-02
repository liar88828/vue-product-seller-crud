<template>
  <CardParentFlex
    :class2="'text-sm sm:text-md md:text-lg '"
    :title="title"
    :right="More"
    :other="link"
    :class="'bg-base-100 '"
    :bg="false"
  >
    <Flex
      class="my-2"
      v-for="dataRelated in data"
      :key="dataRelated.id"
      :data="dataRelated"
    />
  </CardParentFlex>
</template>

<script setup lang="ts">
import type { Product } from "@prisma/client"
import Flex from "./Model/Flex.vue"
import More from "./Model/More.vue"

defineProps({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  data: {
    type: Object as PropType<Product[]>,
    required: true,
  },
})
</script>
