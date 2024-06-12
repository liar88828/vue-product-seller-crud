<template>
  <ElNavChat class="z-20 fixed">
    <Search />
  </ElNavChat>
  <div class="container bg-base-300 min-h-screen">
    <!-- @vue-expect-error -->
    <PageChat :data="data?.chat" />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "chat",
})

import { dataChat1 } from "~/assets/example/message/dataMessage"
import Search from "~/components/Page/Chat/Message/Search.vue"
const { id } = useRoute().params
const { data } = await useFetch(`/api/message/${id}`)
watch(data, () => {
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
</script>

<style>
html {
  overflow: scroll;
  overflow-x: hidden;
}
html::-webkit-scrollbar {
  width: 0; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
/* Optional: show position indicator in red */
html::-webkit-scrollbar-thumb {
  background: #ff0000;
}
</style>
