<template>
  <TransactionPay :data="dataOrders[0]" :company="dataCompany">
  </TransactionPay>
</template>

<script lang="ts" setup>
import { dataOrders } from "~/assets/example/transaction/dataOrder"
import { dataCompany } from "~/assets/example/user/dataCompany"
</script>
