<template>
  <PageChatList :data="dataNotifies" :new-message="countUnRead" />
</template>
<script lang="ts" setup>
import { countUnRead, dataNotifies } from "~/assets/example/message/dataMessage"
</script>
