<template>
  <ElLoadingBounce v-if="pending" />
  <!-- <PageTransactionPay :data="data?.market" :company="data?.confirm">
    <button class="btn btn-primary w-full" @click="()=>onConfirm">Confirm</button>
    <button class="btn btn-error w-fill" @click="()=>onDelete">Reject</button>
  </PageTransactionPay> -->
</template>

<script lang="ts" setup>
import { useConfirm } from "~/composables/product/useConfirm"
// import { dataOrders } from "~/assets/example/transaction/dataOrder"
// import { dataCompany } from "~/assets/example/user/dataCompany"
const { id } = useRoute().params
const { data, refresh, pending } = await useFetch(`/api/market/confirm/${id}`)
const { onReject, onConfirm } = useConfirm()

watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>
