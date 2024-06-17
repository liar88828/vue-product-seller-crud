<template>
  <!-- @vue-expect-error -->
  <PageTransactionPay
    :data="{
      market: data?.pay.market,
      order: data?.pay.order,
    }"
  />
</template>

<script lang="ts" setup>
// import { dataOrders } from "~/assets/example/transaction/dataOrder"
// import { dataCompany } from "~/assets/example/user/dataCompany"
const { id } = useRoute().params
const { data, error, pending } = await useFetch(`/api/user/pay/${id}`)
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
if (error) {
  throw new Error("data not error")
}
</script>
