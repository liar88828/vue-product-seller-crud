<template>
  <ElError v-if="!data" />
  <CardSide v-else :class="'card-bordered '">
    <figure class="w-1/3">
      <img
        alt="Related product"
        :src="data.image ?? 'https://picsum.photos/300 '"
        class="w-full h-36 object-cover"
      />
    </figure>
    <CardBody class="w-2/3">
      <Desc :side="true" :data="data" v-model:detail="detail" />
    </CardBody>
  </CardSide>
</template>

<script lang="ts" setup>
import type { Product } from "@prisma/client"
import Desc from "../Desc/index.vue"

defineProps<{ data: ProductTrolly }>()
const detail = ref<boolean>(false)
</script>
