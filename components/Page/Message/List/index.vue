<!-- Main Chat List -->
<template>
  <CardParent :title="'Message'" :class="'bg-base-100/85'">
    <template #rightSlot>
      <Filter :data="notify" />

      <!-- <Search :newMessage="count" /> -->
    </template>
    <!-- <template #filter>
      <div class="flex gap-5 justify-end">
      </div>
    </template> -->
    <MessageItem
      v-for="dataList in newData"
      :data="dataList"
      :key="dataList.name"
    />
    <div class="flex justify-center pt-5">
      <ElPagination :keys="keys" :total="10" />
    </div>
  </CardParent>
</template>

<script lang="ts" setup>
import Filter from "./Filter.vue"
import { useList } from "~/composables/message/useList"
import MessageItem from "./MessageItem.vue"
const { filter, keys } = useList()
const newData = computed(() => filter(props.notify))
const props = defineProps<{
  notify: NotifyMessageClient[]
  count: number
}>()
</script>
