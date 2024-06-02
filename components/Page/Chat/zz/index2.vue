<template>
  <!-- row-span-11 grid-rows-12 -->
  <!-- <div class="gap-2 h-16"> -->
  <div class="TEST_CSS overflow-y-scroll" ref="scroll">
    <Message
      v-for="message in data"
      :data="message"
      :user="{ name: 'Alex' }"
    />
  </div>
  <!-- </div> -->
  <!-- row-span-1 -->
  <!-- <Send :message="message" :onSend="onSend" /> -->
</template>

<script lang="ts" setup>
import type { MessageProps } from "~/types/globals/message"
const props = defineProps<{
  data: MessageProps[]
}>()

const data = ref<MessageProps[]>(props.data)
const message = ref<string>("")
const scroll = ref()
const onSend = () => {
  data.value.push({
    id: "1",
    left: false,
    msg: message.value,
    name: "Alex",
    time: "10:00",
  })
  // scroll down
  // scroll.value.scrollTop = scroll.value.scrollHeight
  // console.log(scroll.value.scrollTop)
  // console.log(scroll.value.scrollHeight)
  // window.scrollTo(
  //   0,
  //   document.body.scrollHeight - 100
  //   // || document.documentElement.scrollHeight
  // )

  // console.log(document.body.scrollHeight)
  // // console.log(document.documentElement.scrollHeight)
}
