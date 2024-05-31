<template>
  <ChatList :data="dataMessages" :new-message="countUnRead" />
</template>
<script lang="ts" setup>
import { countUnRead, dataMessages } from "~/assets/example/dataMessage"
// console.log(countUnRead,'un read')
</script>
