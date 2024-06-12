<template>
  <PageChatList :data="dataNotifies" :new-message="countUnRead" />
</template>
<script lang="ts" setup>
import { countUnRead, dataNotifies } from "~/assets/example/message/dataMessage"

const { data } = await useFetch(`/api/message/`)
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>
