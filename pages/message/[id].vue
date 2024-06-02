<template>
  <MainHeadNavChat class="z-20 fixed">
    <ModalChat />
  </MainHeadNavChat>
  <div class="container bg-base-300 min-h-screen">
    <Chat :data="dataChat1" />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "chat",
})

import { dataChat1 } from "~/assets/example/message/dataMessage"
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
