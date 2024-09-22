<script setup lang="ts">
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
  <div v-if="pending">Loading ...</div>
  <div v-else-if="error || !data?.pay">Error</div>
  <PageTransactionPay
    v-else
    :data="{
      market: data.pay.market,
      order: data.pay.order,
    }"
  >
    <button @click="onPay" class="btn btn-primary w-full">Pay</button>
  </PageTransactionPay>
</template>
