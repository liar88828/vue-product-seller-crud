<template>
  <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-5 sm:py-12 ">
    <ProductImageDetail />
    <ProductDescription :data="dataDescription" />
  </div>
  <ProductSpec :data="dataDescription" />
  <ProductTech />
  <ProductReview :dataPreview="dataPreview" />
  <ProductRelated :dataRelated="dataRelated" />
</template>

<script setup lang="ts">
import type { ProductItem } from "~/types/product/item"

const dataRelated = {
  name: "Wireless Noise-Cancelling Earbuds",
  brand: "Premium audio experience",
  price: 149.99,
  img: "https://picsum.photos/220",
}

const dataPreview = {
  name: "Alex",
  time: "4 months ago",
  text: "These headphones are amazing! The noise cancellation is top-notch and the sound quality is incredible. Highly recommend for anyone looking for a premium audio experience.",
  img: "https://picsum.photos/200",
}
const dataDescription: ProductItem = {
  name: "High-Quality Noise-Cancelling Headphones",
  description:
    "Experience the ultimate in audio immersion with our premium noise-cancelling headphones. Crafted with the finest materials and advanced technology, these headphones deliver unparalleled sound quality and comfort for the discerning listener.",
  brand: "Apple",
  id: "1",
  image: "https://picsum.photos/220",
  price: 199.99,
  stock: 10,
  typeId: "1",
  userId: "1",
  spec_good: [
    "Powerful noise-cancelling technology",
    "Wireless Bluetooth connectivity",
    "Long-lasting battery life",
    "Comfortable and adjustable design",
  ],
  spec_prod: [
    {
      type: "Audio",
      list: [
        "Powerful noise-cancelling technology",
        "Wireless Bluetooth connectivity",
        "Long-lasting battery life",
        "Comfortable and adjustable design",
      ],
    },
    {
      type: "Design",
      list: [
        "Adjustable, padded headband",
        "Soft, memory foam ear cups",
        "Foldable for easy storage",
      ],
    },
    {
      type: "Connectivity",
      list: ["Bluetooth 5.0", "Wireless range: 30ft (10m)", "USB-C charging"],
    },
    {
      type: "Battery",
      list: [
        "Up to 30 hours of playtime",
        "Quick charge: 5 minutes for 2 hours of playback",
      ],
    },
  ],
}
</script>
