<template>
  <div class="flex flex-col gap-6">
    <img
      alt="Headphone"
      class="rounded-xl object-cover w-full aspect-square shadow-lg"
      height="600"
      :src="imageRender"
      width="600"
    />

    <div class="flex gap-4">
      <button
        v-for="d in data"
        class="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors shadow-lg"
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
import type { DataImage } from "~/assets/example/product/image"

const props = defineProps<{ data: DataImage[] }>()
const { imageRender, selectImage } = useImageSelect(props.data)
</script>
