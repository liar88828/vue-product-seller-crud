<script setup lang="ts">
import { dataCompany } from "~/assets/example/dataCompany"
import { dataPurchases } from "~/assets/example/dataPurchase"
</script>

<template>
  <TransactionPay :data="dataPurchases[0]" :company="dataCompany">
    <button class="btn btn-primary w-full">Pay</button>
  </TransactionPay>
</template>
