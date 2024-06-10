<template>
  <!-- @vue-expect-error -->
  <PageTransactionPay :data="data?.market" :company="data?.company">
    <button class="btn btn-primary w-full">Confirm</button>
    <button class="btn btn-error w-fill">Delete</button>
  </PageTransactionPay>
</template>

<script lang="ts" setup>
import { dataOrders } from "~/assets/example/transaction/dataOrder"
import { dataCompany } from "~/assets/example/user/dataCompany"
const { id } = useRoute().params
const { data } = await useFetch(`/api/market/confirm/${id}`)
</script>
