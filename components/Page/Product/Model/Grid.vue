<template>
  <Card :class="styleCard" :compact="true">
    <figure>
      <img
        alt="Related product"
        class="object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
        height="300"
        :src="data.image ?? 'https://picsum.photos/300'"
        width="300"
      />
    </figure>

    <CardBodyBox :class="`w-full`">
      <div class="flex flex-col h-full justify-between">
        <Desc :data="data" v-model:detail="props.detail" />
      </div>
    </CardBodyBox>
  </Card>
</template>

<script lang="ts" setup>
import type { Product } from "@prisma/client"
import Desc from "./Desc.vue"

const props = defineProps({
  data: {
    type: Object as PropType<Product>,
    required: true,
  },
  detail: {
    type: Boolean,
    required: false,
    default: false,
  },
  static: {
    type: Boolean,
    required: false,
    default: false,
  },
  full: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const styleCard = computed(() => {
  return `
  ${props.static ? " static " : ""}
  ${props.full ? " w-full " : " w-40"}
 
  `
})
// console.log(props.full,'is full')
</script>
