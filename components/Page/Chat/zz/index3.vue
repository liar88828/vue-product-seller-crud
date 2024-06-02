<template>
  <div
    :class="[
      ' h-[70vh] sm:h-[71vh] md:h-[80vh] lg:h-[80vh] overflow-y-scroll border border-gray-300 p-2 transition-all duration-300 ease-linear flex flex-col justify-between',
      { fullscreen: isFullscreen },
    ]"
    ref="chatContainer"
  >
    <ElButtonScroll />

    <Minimize
      :isFullscreen="isFullscreen"
      :toggleFullscreen="toggleFullscreen"
    />

    <Message v-for="message in data" :data="message" :user="{ name: 'Alex' }" />
  </div>
  <Send
    v-model:message="message"
    v-model:isFullscreen="isFullscreen"
    :onSend="onSend"
    :toggleFullscreen="toggleFullscreen"
  />
</template>

<script lang="ts" setup>
import { ref, watch, nextTick } from "vue"
import type { MessageProps } from "~/types/globals/message"
import Message from "../Message/Text.vue"
import Minimize from "../Message/Minimize.vue"
import Send from "../Message/Send.vue"
const props = defineProps<{
  data: MessageProps[]
}>()

const message = ref<string>("")
const chatContainer = ref<HTMLDivElement | null>(null)
const isFullscreen = ref<boolean>(false)

const scrollToBottom = () => {
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight
  }
}

const onSend = (): void => {
  if (message.value.trim() !== "") {
    props.data.push({
      id: (props.data.length + 1).toString(),
      left: false,
      msg: message.value,
      name: "Alex",
      time: new Date().toLocaleTimeString(),
    })
    message.value = ""
    nextTick(() => {
      scrollToBottom()
    })
  }
}

const toggleFullscreen = (): void => {
  isFullscreen.value = !isFullscreen.value
}

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
