<template>
  <div class="flex flex-wrap gap-1 justify-end">
    <ElSelectMessage v-model:select="store.value" />
  </div>
</template>

<script lang="ts" setup>
import { useList } from "~/composables/message/useList"
const { store } = useList()

defineProps({
  data: {
    type: Object as PropType<NotifyMessageClient[]>,
    required: true,
  },
})
</script>
