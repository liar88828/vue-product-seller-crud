export const useChat = () => {
  const isFullscreen = ref<boolean>(false)
  const chatContainer = ref<HTMLDivElement | null>(null)
  const message = ref<string>("")
  const scrollToBottom = () => {
    if (chatContainer.value) {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight
    }
  }
  const toggleFullscreen = (): void => {
    isFullscreen.value = !isFullscreen.value
  }
  return {
    isFullscreen,
    message,
    toggleFullscreen,
    scrollToBottom,
    onSend: (data: MessageListClient[]): void => {
      if (message.value.trim() !== "") {
        data.push({
          id: (data.length + 1).toString(),
          msg: message.value,
          name: "Alex",
          time: new Date(),
          // img: "https://picsum.photos/200",
          // read: false,
          // message: [],
        })
        message.value = ""
        nextTick(() => {
          scrollToBottom()
        })
      }
    },
  }
}
