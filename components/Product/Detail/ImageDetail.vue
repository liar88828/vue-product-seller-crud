<template>
  <div class="flex flex-col gap-6">
    <img
      alt="Headphone"
      class="rounded-xl object-cover w-full aspect-square"
      height="600"
      src="https://picsum.photos/220"
      width="600"
    />
    <div class="flex gap-4">
      <button
        class="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50"
      >
        <img
          alt="Headphone preview"
          class="aspect-square object-cover"
          height="100"
          src="https://picsum.photos/220"
          width="100"
        />
        <span class="sr-only">View Image 1</span>
      </button>
      <button
        class="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50"
      >
        <img
          alt="Headphone preview"
          class="aspect-square object-cover"
          height="100"
          src="https://picsum.photos/220"
          width="100"
        />
        <span class="sr-only">View Image 2</span>
      </button>
      <button
        class="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50"
      >
        <img
          alt="Headphone preview"
          class="aspect-square object-cover"
          height="100"
          src="https://picsum.photos/220"
          width="100"
        />
        <span class="sr-only">View Image 3</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const data = {}
</script>
