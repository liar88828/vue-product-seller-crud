<template>
  <ChatMessage
    v-for="message in data"
    :data="message"
    :user="{ name: 'Alex' }"
  />
</template>

<script lang="ts" setup>
import type { MessageProps } from "~/types/globals/message"
defineProps<{
  data: MessageProps[]
}>()
</script>
