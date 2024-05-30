<script setup lang="ts">
import { dataCompany } from "~/assets/example/dataCompany"
import { dataPurchases } from "~/assets/example/dataPurchase"
const route = useRoute()
const onPay = () => {
  console.log(`Pay id :${route.params.id} send`)
  //--user
  // will redirect my be /user/order
  // that status is pending
  // --admin
  // will confirm the purchase
}
</script>

<template>
  <TransactionPay :data="dataPurchases[0]" :company="dataCompany">
    <button @click="onPay" class="btn btn-primary w-full">Pay</button>
  </TransactionPay>
</template>
