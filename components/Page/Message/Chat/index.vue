<template>
  <!-- sm:h-[86vh] -->
  <div
    :class="[
      ' overflow-y-auto transition-all duration-300 ease-linear pt-16',
      { fullscreen: isFullscreen },
    ]"
    ref="chatContainer"
  >
    <Minimize
      :isFullscreen="isFullscreen"
      :toggleFullscreen="toggleFullscreen"
    />

    <Text
      class=""
      v-for="message in data"
      :data="message"
      :user="{ name: 'Alex' }"
    />
  </div>
  <div class="fixed right-0 left-0 bottom-0 p-2 bg-base-100">
    <Send
      v-model:message="message"
      v-model:isFullscreen="isFullscreen"
      :onSend="() => onSend(data)"
      :toggleFullscreen="toggleFullscreen"
    />
  </div>
</template>

<script lang="ts" setup>
import { watch, nextTick } from "vue"
import Minimize from "./Minimize.vue"
import Send from "./Send.vue"
import Text from "./Text.vue"
import type { MessageListClient } from "~/types/message/message"

const props = defineProps<{
  data: MessageListClient[]
}>()

const { isFullscreen, message, scrollToBottom, onSend, toggleFullscreen } =
  useChat()

watch(props.data, () => {
  nextTick(() => {
    scrollToBottom()
  })
})
</script>

<style>
.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: white;
  z-index: 9999;
  padding: 20px;
  border: none;
  box-shadow: none;
}
.back-button {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10000;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
