<!-- Main Chat List -->
<template>
  <CardParent :title="'Message'" :class="'bg-base-100/85'">
    <template #rightSlot>
      <Search :newMessage="count" />
    </template>
    <template #filter>
      <div class="flex gap-5 justify-end">
        <Filter :data="notify" />
      </div>
    </template>
    <Box v-for="dataList in newData" :data="dataList" :key="dataList.name" />
    <div class="flex justify-center pt-5">
      <ElPagination :keys="keys" :total="10" />
    </div>
  </CardParent>
</template>

<script lang="ts" setup>
import type { NotifyMessage } from "~/types/message/notify"
import Box from "./Box.vue"
import Search from "./Search.vue"
import Filter from "./Filter.vue"
import { useList } from "~/composables/message/useList"
const { filter, keys } = useList()
const newData = computed(() => filter(props.notify))
const props = defineProps<{
  notify: NotifyMessage[]
  count: number
}>()
</script>
