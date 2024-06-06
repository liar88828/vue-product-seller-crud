<template>
  <CardHead :title="data.name" :class="titleStyle">
    <div class="flex gap-2" v-if="side">
      <button
        @click="handlerDeleteTrolly"
        class="btn btn-sm btn-square btn-error"
      >
        <IconsTrash />
      </button>
      <button
        v-if="$route.path.includes('like')"
        @click="handlerAddTrolly"
        class="btn btn-sm btn-square btn-info"
      >
        <IconsTrolley />
      </button>
    </div>
  </CardHead>

  <div>
    <ElRating :rating="3" />

    <div class="flex justify-between mt-2">
      <div class="flex flex-col gap-1">
        <h4 :class="priceStyle">{{ getRupiah(data.price) }}</h4>
        <p class="text-sm whitespace-nowrap space-x-1">
          <span class="badge badge-primary badge-sm sm:badge-md">{{
            123
          }}</span>
          <span class="text-xs sm:text-sm">Sold</span>
        </p>
      </div>

      <div class="flex items-end">
        <Counter :side="side" v-model:counter="counter" />

        <div class="" v-if="!side">
          <NuxtLink
            :to="`/shop/${data.id}`"
            class="btn sm:btn-outline sm:btn-md btn-sm btn-square"
            v-if="detail === false"
          >
            <IconsTrolley class="h-5 w-5" />
          </NuxtLink>

          <NuxtLink
            to="#"
            class="btn btn-outline sm:btn-sm btn-xs"
            v-if="detail === true"
          >
            <IconsDetail />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "@prisma/client"
import Counter from "./Counter.vue"

const props = defineProps<{
  data: Product
  side?: boolean
  detail?: boolean
}>()
// const detail = defineModel("detail", { required: true })

const titleStyle = props.side
  ? "text-sm sm:text-md md:text-lg font-bold"
  : "text-sm sm:text-md md:text-lg font-bold"

const priceStyle = props.side
  ? "text-md sm:text-lg md:text-xl font-bold"
  : "text-sm sm:text-md md:text-lg font-bold"

const counter = ref<number>(0)

const handlerDeleteTrolly = () => {
  console.log(`delete trolly ${props.data.id}`)
}

const handlerAddTrolly = () => {
  console.log(`Add trolly ${props.data.id}`)
}
</script>
