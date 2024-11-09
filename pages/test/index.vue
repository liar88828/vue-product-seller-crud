<template>
  <div>
    <!-- Hoverable Rectangle that shows the navbar on hover -->
    <div
      v-if="!showNavbar"
      class="fixed bottom-0 left-0 right-0 h-4 bg-gray-300 hover:bg-gray-400"
      @mouseenter="showNavbarOnHover"
    >
      <p class="text-center text-xs text-gray-500">Hover to Show Navbar</p>
    </div>

    <!-- Bottom Navbar -->
    <div
      v-if="showNavbar"
      class="fixed bottom-0 left-0 right-0 bg-white shadow-lg"
      @mouseleave="setHideTimeout"
    >
      <nav class="flex justify-around py-2 bg-gray-100">
        <div class="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mx-auto text-gray-500"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
          >
            <path
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0v10a1 1 0 01-1 1h-3m-7-7h4"
            />
          </svg>
          <span class="block text-sm text-gray-700">Home</span>
        </div>

        <div class="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mx-auto text-gray-500"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
          >
            <path d="M19 21l-7-3-7 3V5a2 2 0 012-2h10a2 2 0 012 2z" />
          </svg>
          <span class="block text-sm text-gray-700">Explore</span>
        </div>

        <div class="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mx-auto text-gray-500"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
          >
            <path
              d="M12 8c1.656 0 3-1.344 3-3s-1.344-3-3-3-3 1.344-3 3 1.344 3 3 3zm0 2c-2.206 0-6 1.118-6 3.333V18h12v-4.667C18 11.118 14.206 10 12 10z"
            />
          </svg>
          <span class="block text-sm text-gray-700">Profile</span>
        </div>
      </nav>
    </div>
  </div>
</template>
<script lang="ts" setup>
let showNavbar = ref(true)
let hideTimeout = ref<any>(null)

definePageMeta({
  layout: false,
})
// Reactive state for showing or hiding the navbar

const setHideTimeout = () => {
  resetHideTimeout() // Clear any previous timeout
  hideTimeout.value = setTimeout(() => {
    showNavbar.value = false
  }, 5000) // 5 seconds
}

// Clear the timeout if it exists
const resetHideTimeout = () => {
  if (hideTimeout.value) {
    clearTimeout(hideTimeout.value)
  }
}

// Show navbar on hover and reset the timeout
const showNavbarOnHover = () => {
  showNavbar.value = true
  setHideTimeout() // Reset the timer when navbar is shown
}
// Hide the navbar initially for 5 seconds
onMounted(() => {
  setHideTimeout()
})
</script>
