<template>
  <TransactionPay :data="dataPurchases[0]" :company="dataCompany">
  </TransactionPay>
</template>

<script lang="ts" setup>
import { dataCompany } from "~/assets/example/dataCompany"
import { dataPurchases } from "~/assets/example/dataPurchase"
</script>
