<template>
  <!-- <ElNavChat class="z-20 fixed">
    <PageMessageChatSearch />
  </ElNavChat> -->
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <!-- @vue-ignore -->
  <NuxtLayout v-else name="chat" :data="data.chat">
    <div class="bg-base-300 min-h-screen">
      <!-- @vue-ignore -->
      <PageMessageChat :data="data?.chat" />
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: false,
})
// import { dataChat1 } from "~/assets/example/message/dataMessage"
const { id } = useRoute().params
const { data, pending, error } = await useMessage().findId(id)
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
