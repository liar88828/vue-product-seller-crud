<template>
  <TransactionPay :data="dataPurchases[0]" :company="dataCompany">
    <button class="btn btn-primary w-full">Confirm</button>
    <button class="btn btn-error w-fill">Delete</button></TransactionPay
  >
</template>

<script lang="ts" setup>
import { dataCompany } from "~/assets/example/dataCompany"
import { dataPurchases } from "~/assets/example/dataPurchase"
</script>
