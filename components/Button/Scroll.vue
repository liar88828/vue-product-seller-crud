<template>
  <Transition>
    <a
      v-if="isVisible"
      href="#"
      class="fixed bottom-[10%] right-4 bg-white btn btn-circle z-10"
    >
      <IconsArrowUp />
    </a>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"
const isVisible = ref(false)

const handleScroll = () => {
  if (window.scrollY > 500) {
    isVisible.value = true
  } else {
    isVisible.value = false
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
  // console.log(window.screenX)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
