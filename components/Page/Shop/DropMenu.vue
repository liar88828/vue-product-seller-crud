<template>
  <ul
    class="menu sm:menu-vertical menu-horizontal bg-base-100 rounded-box shadow w-full flex justify-between"
  >
    <li class="shadow bg-base-300">
      <a href="">Filter</a>
    </li>
    <li>
      <details>
        <summary>Price</summary>
        <ul class="bg-base-300 shadow">
          <li v-for="price in prices" :key="price.title">
            <a>{{ price.title }}</a>
          </li>
        </ul>
      </details>
    </li>
    <li>
      <details>
        <summary>Category</summary>
        <ul class="bg-base-300">
          <li v-for="category in categories" :key="category.title">
            <a>{{ category.title }}</a>
          </li>
        </ul>
      </details>
    </li>
    <li>
      <details>
        <summary>Color</summary>
        <ul class="bg-base-300">
          <li v-for="color in colors" :key="color.title">
            <a>{{ color.title }}</a>
          </li>
        </ul>
      </details>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { categories, colors, prices } from "~/assets/shopLink"
</script>
