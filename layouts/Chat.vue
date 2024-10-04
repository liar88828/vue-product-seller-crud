<template>
  <section class="min-h-screen bg-base-300 w-screen">
    <section class="navbar bg-base-100 shadow h-16 grid grid-cols-3">
      <div class="">
        <button class="btn btn-ghost btn-square" @click="router.back()">
          <IconsBack class="icons" />
        </button>
      </div>
      <div class="flex-1 gap-2 items-center justify-center pr-1">
        <h1 class="font-bold text-lg">{{ data[0].name }}</h1>
      </div>
    </section>
    <div class="flex">
      <main class="container mx-auto mt-3 mb-20 md:mb-10 min-h-screen">
        <!-- <ElHeadTab :items="itemsArray" /> -->
        <slot />
        <!-- <Send
          class=""
          v-model:message="message"
          v-model:isFullscreen="isFullscreen"
          :onSend="() => onSend(data)"
          :toggleFullscreen="toggleFullscreen"
        /> -->
      </main>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Send from "~/components/Icons/Send.vue"

const router = useRouter()

const props = defineProps<{
  data: MessageListClient[]
}>()

const { isFullscreen, message, scrollToBottom, onSend, toggleFullscreen } =
  useChat()
</script>
