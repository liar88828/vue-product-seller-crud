<template>
  <PageTransactionPay
    :data="{
      company: dataCompany,
      order: dataOrders[0],
    }"
  />
</template>

<script lang="ts" setup>
import { dataOrders } from "~/assets/example/transaction/dataOrder"
import { dataCompany } from "~/assets/example/user/dataCompany"
</script>
