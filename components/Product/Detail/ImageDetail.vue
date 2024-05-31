<template>
  <div class="flex flex-col gap-6 ">
    <img
      alt="Headphone"
      class="rounded-xl object-cover w-full aspect-square shadow-lg"
      height="600"
      :src="selectImage || 'https://picsum.photos/220'"
      width="600"
    />

    <div class="flex gap-4">
      <button
        v-for="d in data"
        class="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors shadow-lg "
        @click="selectImage = d.img"
      >
        <img
          :alt="d.title"
          class="aspect-square object-cover"
          :src="d.img"
          height="100"
          width="100"
        />
        <span class="sr-only">{{ d.title }}</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const data = [
  {
    title: "Headphone",
    img: "https://picsum.photos/220",
    link: "https://picsum.photos/220",
  },
  {
    title: "Phone",
    img: "https://picsum.photos/222",
    link: "https://picsum.photos/230",
  },
  {
    title: "Laptop",
    img: "https://picsum.photos/213",
    link: "https://picsum.photos/342",
  },
  {
    title: "Monitor",
    img: "https://picsum.photos/234",
    link: "https://picsum.photos/123",
  },
]

const selectImage = ref("")
</script>
