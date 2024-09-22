<template>
  <div class="flex justify-between items-center">
    <h1 class="title-md font-bold">Order History</h1>
    <div class="flex flex-wrap gap-1 justify-end">
      <ul
        class="menu menu-xs menu-horizontal bg-base-100 rounded w-full flex justify-between gap-2 flex-col"
      >
        <ElSelect v-model:select="store.status" :data="staticLink.status" />
        <ElSelect v-model:select="store.category" :data="staticLink.category" />
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { staticLink } from "~/assets/link/shopLink"
const store = reactive({
  status: 0,
  category: 0,
})
const props = defineProps({
  data: {
    type: Object as PropType<HistoryClient[]>,
    required: true,
  },
  market: {
    type: Boolean,
    default: false,
    required: false,
  },
})
// const { store } = useOrder(props.data)
</script>
