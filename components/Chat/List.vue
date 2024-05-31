<!-- Main Chat List -->
<template>
  <!-- :right="UnRead" -->
  <CardParent :title="'Message'">
    <template #rightSlot>
      <UnRead :count="1" :class="'pr-3'" title="New" :read="true" />
    </template>
    <CardMessage
      v-for="dataList in data"
      :data="dataList"
      :key="dataList.name"
    />
  </CardParent>
</template>

<script lang="ts" setup>
import type { MessageListProps } from "~/types/globals/message"
import UnRead from "./UnRead.vue"
defineProps<{
  data: MessageListProps[]
  newMessage: number
}>()
</script>
