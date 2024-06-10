<template>
  <!-- sm:h-[86vh] -->
  <div
    :class="[
      ' h-[95vh] sm:h-[92vh] md:h-[92vh] lg:h-[91vh]    pt-16',
      ' overflow-y-scroll   transition-all duration-300 ease-linear ',
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
  <Send
    class=""
    v-model:message="message"
    v-model:isFullscreen="isFullscreen"
    :onSend="onSend"
    :toggleFullscreen="toggleFullscreen"
  />
</template>

<script lang="ts" setup>
import { ref, watch, nextTick } from "vue"
import Minimize from "./Message/Minimize.vue"
import type { MessageContact } from "~/types/message/message"
import Send from "./Message/Send.vue"
import Text from "./Message/Text.vue"
const props = defineProps<{
  data: MessageContact[]
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
      msg: message.value,
      name: "Alex",
      time: new Date(),
      img: "https://picsum.photos/200",
      read: false,
      message: [],
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
