<template>
  <div class="flex items-center gap-4 shadow bg-base-200">
    <img
      :src="image"
      width="80"
      height="80"
      alt="Product Image"
      class="rounded-md"
      style="aspect-ratio: 80 / 80; object-fit: cover"
    />
    <div class="flex-1 grid gap-1">
      <h3 class="font-medium">{{ name }}</h3>
      <div
        class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
      >
        <div>Size:{{ size }}</div>
        <div>Qty: {{ qty }}</div>
        <div>${{ price }}</div>
      </div>
    </div>
    <button
      class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent h-10 w-10 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
    >
      <IconsTrash />
      <span class="sr-only">Remove</span>
    </button>
  </div>
</template>

<script lang="ts" setup>
type ProductItem = {
  image: string
  name: string
  size: string
  qty: number
  price: number
}
defineProps<ProductItem>()
const data: ProductItem = {
  image: "https://picsum.photos/200",
  name: "Acme Circles T-Shirt",
  price: 49.99,
  qty: 2,
  size: "M",
}
</script>
