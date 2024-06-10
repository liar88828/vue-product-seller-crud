<template>
  <div class="flex flex-wrap gap-1 justify-end">
    <ElSelectMessage v-model:select="store.value" />
  </div>
</template>

<script lang="ts" setup>
import { useList } from "~/composables/message/useList"
import type { NotifyMessage } from "~/types/message/notify"
const { store } = useList()

defineProps({
  data: {
    type: Object as PropType<NotifyMessage[]>,
    required: true,
  },
})
</script>
