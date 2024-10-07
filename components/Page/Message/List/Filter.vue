<template>
  <div class="flex flex-wrap gap-1 justify-end">
    <ElSelectMessage v-model:select="store.value" />
  </div>
</template>

<script lang="ts" setup>
const { store } = useMessage()

defineProps({
  data: {
    type: Object as PropType<MessageListClient[]>,
    required: true,
  },
})
</script>
