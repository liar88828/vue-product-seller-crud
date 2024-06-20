<script setup lang="ts">
// import { dataOrders } from "~/assets/example/transaction/dataOrder"
// import { dataCompany } from "~/assets/example/user/dataCompany"
const id = useRoute().params
const onPay = () => {
  console.log(`Pay id :${id} send`)
  //--user
  // will redirect my be /user/order
  // that status is pending
  // --admin
  // will confirm the purchase
}

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

<template>
  <!-- @vue-expect-error   -->
  <PageTransactionPay
    :data="{ market: data?.pay.market, order: data?.pay.order }"
  >
    <button @click="onPay" class="btn btn-primary w-full">Pay</button>
  </PageTransactionPay>
</template>
