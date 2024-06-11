<template>
  <Loading v-if="pending" />
  <!-- @vue-expect-error -->
  <PageTransactionPay :data="data?.market" :company="data?.company">
    <button class="btn btn-primary w-full" @click="onConfirm">Confirm</button>
    <button class="btn btn-error w-fill" @click="onReject">Reject</button>
  </PageTransactionPay>
</template>

<script lang="ts" setup>
// import { dataOrders } from "~/assets/example/transaction/dataOrder"
// import { dataCompany } from "~/assets/example/user/dataCompany"
const { id } = useRoute().params
const { data, refresh, pending } = await useFetch(`/api/market/confirm/${id}`)
console.log(pending)
const onReject = async () => {
  await useFetch(`/api/market/confirm/${id}`, {
    method: "DELETE",
  })
  refresh()
}

const onConfirm = async () => {
  await useFetch(`/api/market/confirm/${id}`, {
    method: "PUT",
  })
  refresh()
}
</script>
