<template>
  <CardParentSide :title="'Trolly'" :right="Trash">
    <ElError v-if="!data" text="error" />
    <PageProductModelSideNew
      v-else
      v-for="item in data"
      :data="item.Box"
      :key="item?.id"
      @click="handlerClick"
    />
    <Total :total-pay="dataTotalPays" :total-product="4" :total-send="5.99" />
    <PageProductModelSideTotal />
  </CardParentSide>
  {{ dataTotal() }}
</template>

<script lang="ts" setup>
import type { TollyMark } from "~/types/product/total"
import Total from "./Total.vue"
import Trash from "~/components/Icons/Trash.vue"

defineProps<{ data: TollyProps[] }>()
const handlerClick = () => {
  console.log(`click `)
}

const addTotal = useState<TollyMark[]>("add_total", () => [])

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
  addTotal.value.reduce((a, b) => a + b.price * b.qty, 0)
)
</script>
