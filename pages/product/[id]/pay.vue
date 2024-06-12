<script setup lang="ts">
import { dataOrders } from "~/assets/example/transaction/dataOrder"
import { dataCompany } from "~/assets/example/user/dataCompany"
import type { PayProps } from "~/types/transaction/page"
const route = useRoute()
const onPay = () => {
  console.log(`Pay id :${route.params.id} send`)
  //--user
  // will redirect my be /user/order
  // that status is pending
  // --admin
  // will confirm the purchase
}

const { id } = useRoute().params
const { data, error } = await useFetch<PayProps>(`/api/${id}/pay`)
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
  <!-- @vue-expect-error -->
  <PageTransactionPay :data="data">
    <button @click="onPay" class="btn btn-primary w-full">Pay</button>
  </PageTransactionPay>
</template>
