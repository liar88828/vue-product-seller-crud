<template>
  <CardInit :title="'Confirm'">
    <Option />
    <Table :data="data" />
  </CardInit>
</template>

<script lang="ts" setup>
import Option from "./Option.vue"
import Table from "./Table.vue"

defineProps<{ data: TransClient[] }>()
</script>
