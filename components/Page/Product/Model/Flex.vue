<template>
  <Card :class="'card-bordered '">
    <figure>
      <img
        alt="Related product"
        class="object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
        :src="data.image ?? 'https://picsum.photos/300'"
        height="300"
        width="300"
      />
    </figure>
    <CardBodyBox :class="'w-[20vh] sm:w-[22vh] md:w-[24vh]'">
      <div :class="`flex flex-col h-full justify-between`">
        <Desc :data="data" v-model:detail="props.detail" />
      </div>
    </CardBodyBox>
  </Card>
</template>

<script lang="ts" setup>
import type { Product } from "@prisma/client"
import Desc from "./Desc/index.vue"

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
})
</script>
