<template>
  <div class="flex justify-between items-center">
    <h1 class="title-md font-bold">Order History</h1>
    <div class="flex flex-wrap gap-1 justify-end">
      <ul
        class="menu menu-xs menu-horizontal bg-base-100 rounded w-full flex justify-between gap-2"
      >
        <!-- <ElSelect :data="staticLink.sort" 
        :select=""
      /> -->

        <!-- v-model:select="store.category" -->
        <!-- @vue-skip -->
        <!-- <ElSelect class="z-20" :data="staticLink.category" /> -->
        <!-- <ElSelect class="z-20" :data="staticLink.category" /> -->
        <!-- <IconsInfo /> -->

        <ElSelect v-model:select="store.status" :data="staticLink.status" />

        <ElSelect v-model:select="store.category" :data="staticLink.category" />

        <!-- <div class="flex gap-2">
          
          <Select
            v-model:select="storeFilterOrder.status"
            :data="staticLink.status"
          />

          <Select
            v-model:select="storeFilterOrder.category"
            :data="staticLink.category"
            :class="'w-20'"
          />
        </div> -->

        <!-- <EleMenuDrop :data="staticLink.status" /> -->
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { staticLink } from "~/assets/link/shopLink"
import type { OrderProps } from "~/types/market/order"
const { store } = useOrder()

const props = defineProps({
  data: {
    type: Object as PropType<OrderProps[]>,
    required: true,
  },
  market: {
    type: Boolean,
    default: false,
    required: false,
  },
})
// const { mutation } = useContexts<FilterData>("user_order", storeFilter)
// const { store } = useFilter<OrderProps>(props.data, "",)
// useUseContexts
</script>
