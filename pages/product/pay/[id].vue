<script setup lang="ts">
import { dataOrders } from "~/assets/example/transaction/dataOrder"
import { dataCompany } from "~/assets/example/user/dataCompany"
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
  <PageTransactionPay :data="dataOrders[0]" :company="dataCompany">
    <button @click="onPay" class="btn btn-primary w-full">Pay</button>
  </PageTransactionPay>
</template>
