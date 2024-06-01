<template>
  <div class="grid-rows-12 gap-2 h-20">
    <div class="row-span-11 TEST_CSS" ref="scroll">
      <div class="overflow-y-scroll">
        <div class="">
          <ChatMessage
            v-for="message in data"
            :data="message"
            :user="{ name: 'Alex' }"
          />
        </div>
      </div>
    </div>

    <div class="row-span-1">
      <div class="join w-full">
        <input
          class="input input-bordered join-item w-full"
          placeholder="Message ..."
          v-model="message"
        />
        <button class="btn join-item btn-info" @click="onSend">
          <iconsSend class="icons" />
        </button>
      </div>
    </div>
  </div>
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
  window.scrollTo(
    0,
    document.body.scrollHeight - 100
    // || document.documentElement.scrollHeight
  )

  console.log(document.body.scrollHeight)
  // console.log(document.documentElement.scrollHeight)
}
</script>
