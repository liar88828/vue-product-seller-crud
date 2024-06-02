<template>
  <TransactionPay :data="dataOrders[0]" :company="dataCompany">
    <button class="btn btn-primary w-full">Confirm</button>
    <button class="btn btn-error w-fill">Delete</button></TransactionPay
  >
</template>

<script lang="ts" setup>
import { dataOrders } from "~/assets/example/transaction/dataOrder"
import { dataCompany } from "~/assets/example/user/dataCompany"
</script>
