<template>
  <div :class="`chat ${position ? 'chat-start' : 'chat-end'}  `">
    <!-- <div class="chat-image avatar">
      <div class="w-10 rounded-full">
        <img
          alt="Tailwind CSS chat bubble component"
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        />
      </div>
    </div> -->
    <div class="chat-header font-bold sm:text-xl">
      {{ data.name }}

      <time class="text-xs opacity-50">{{ data.time }}</time>
    </div>

    <div class="chat-bubble">{{ data.msg }}</div>
  </div>
</template>

<script lang="ts" setup>
const { data, name } = defineProps<{
  data: MessageChatClient
  name: string
}>()
const position = useMessage().position(name, data)
</script>
