<template>
  <!--
// v0 by Vercel.
// https://v0.dev/t/3nLOvLFEKvL
-->

  <div class="container mx-auto px-4 py-8">
    <div class="flex justify-between items-center">
      <h2 class="text-xl font-bold text-gray-800">Fruits & Vegetables</h2>
      <div class="flex items-center">
        <span class="text-red-500 text-lg font-bold mr-2">20% Off</span>
        <span class="text-gray-800 text-sm">SALE</span>
      </div>
    </div>
    <div class="gap-4">
      <div class="rounded-lg overflow-hidden shadow-md">
        <img
          src="~/assets/images/chicken.png"
          alt="Smoothie bottle"
          class="w-1/2 md:w-1/2"
          width="200"
          height="400"
          style="aspect-ratio: 200 / 400; object-fit: cover"
        />
        <div class="p-4">
          <h3 class="text-lg font-bold text-gray-800">Vegetable Name</h3>
          <p class="text-gray-600 text-sm">Description</p>
        </div>
      </div>
    </div>
    <div class="text-center mt-8">
      <a
        href="#"
        class="px-4 py-2 bg-blue-800 text-white font-bold rounded-md hover:bg-blue-700"
        >Shop Collection →</a
      >
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
