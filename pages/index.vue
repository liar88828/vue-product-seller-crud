<template>
  <Card>
    <CardBody>
      <CardTitle class="">index {{ data?.count }}</CardTitle>

      <CardAction>
        <button @click="refreshData" class="btn btn-info">Refresh</button>
      </CardAction>
    </CardBody>
  </Card>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "user",
})
await navigateTo("/home")

const { data, pending, error } = await useFetch("/api/test", {
  key: "test_count",
})
const refreshData = () => refreshNuxtData("test_count")
</script>
