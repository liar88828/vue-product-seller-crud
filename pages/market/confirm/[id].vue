<template>
  <ElLoadingBounce v-if="pending" />
  <!-- @vue-expect-error -->
  <PageTransactionDetail
    v-else="!data"
    :data="data?.market"
    :company="data?.confirm"
  >
    <button class="btn btn-primary w-full" @click="onConfirm">Confirm</button>
    <button class="btn btn-error w-fill" @click="onDelete">Reject</button>
  </PageTransactionDetail>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["market"],
  layout: "market",
})

import { useConfirm } from "~/composables/product/useConfirm"
// import { dataOrders } from "~/assets/example/transaction/dataOrder"
// import { dataCompany } from "~/assets/example/user/dataCompany"
const { id } = useRoute().params
const { data, refresh, pending } = await useFetch(`/api/market/confirm/${id}`)
const { onDelete, onConfirm } = useConfirm(id, refresh)

// watch(data, () => {
//   console.log(data.value)
// })
// if (!data.value) {
//   throw new Error("data not found")
// }
</script>
