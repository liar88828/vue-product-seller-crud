<template>
  <CardParentSide :title="'Trolly'" :right="Trash">
    <ElError v-if="!data" text="error" />
    <PageProductModelSideNew
      v-else
      v-for="item in data"
      :item="item"
      :key="item?.id"
      @click="handlerClick"
    />
    <Total :total-pay="dataTotalPays" :total-product="4" :total-send="5.99" />
    <PageProductModelSideTotal />
  </CardParentSide>
  {{ dataTotal() }}
</template>

<script lang="ts" setup>
import type { TolleyMark } from "~/types/product/total"
import Total from "./Total.vue"
import Trash from "~/components/Icons/Trash.vue"

defineProps<{ data: NewTolleyProps[] }>()
const handlerClick = () => {
  console.log(`click `)
}

const addTotal = useState<TolleyMark[]>("add_total", () => [])

const store = reactive({
  data: [],
  totalPay: 0,
})
const dataTotal = () => {
  // if (addTotal.value.length > 0) {
  //   return addTotal.value.map((t) => {
  //     // store.totalPay = t.price * t.qty
  //     console.log(t.name)
  //     return t.price * t.qty
  //   })
  // } else {
  //   return 0
  // }
}
const dataTotalPays = computed(() =>
  // must price not qty
  addTotal.value.reduce((a, b) => a + b.qty * b.qty, 0)
)
</script>
