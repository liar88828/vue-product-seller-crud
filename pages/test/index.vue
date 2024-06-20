<template>
  <Chat :data="dataChat1" />
</template>

<script lang="ts" setup>
import Chat from "~/components/El/Nav/Chat.vue";

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
