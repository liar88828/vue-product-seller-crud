<!-- Main Chat List -->
<template>
  <section class="">
    <div class="flex justify-between items-center gap-2 py-2">
      <h1 class="font-bold text-lg">Message</h1>
      <div class="flex flex-wrap gap-1 justify-end">
        <ElSelectMessage v-model:select="store.value" />
      </div>
    </div>
    <div class="space-y-2">
      <MessageItem
        v-for="dataList in newData"
        :data="dataList"
        :key="dataList.name"
      />
    </div>
    <div class="flex justify-center pt-5">
      <ElPagination :keys="keys" :total="10" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import MessageItem from "./MessageItem.vue"
const props = defineProps<{
  data: MessageListClient[]
}>()
const { filter, keys, store } = useMessage()
const newData = computed(() => filter(props.data))
</script>
