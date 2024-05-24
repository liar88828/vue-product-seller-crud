<template>
  <section class="space-y-5">
    <article class="grid sm:grid-cols-3 sm:grid-rows-1 sm:gap-5 gap-4">
      <ProductCardBox class="row-span-2 sm:col-span-2" />
      <ProductCardBoxGrid1 class="row-span-1 col-span-1" />
      <ProductCardBoxGrid2 class="row-span-1 col-span-1" />
    </article>

    <article class="card card-compact">
      <div class="card-body">
        <h2 class="card-title">Categories Product</h2>
        <div class="overflow-x-auto flex flex-row gap-3 sm:gap-6">
          <ProductCategory
            v-for="dataIcon in dataCategory"
            :key="dataIcon.title"
            :data="dataIcon"
          />
        </div>
      </div>
    </article>

    <article class="card card-compact bg-info/10">
      <div class="card-body">
        <h2 class="card-title">New Products</h2>
        <div class="overflow-x-scroll flex flex-row gap-2 sm:gap-6">
          <ProductCard
            v-for="dataRelated in dataRelateds"
            :key="dataRelated.name"
            :data="dataRelated"
          />
        </div>
      </div>
    </article>

    <article class="card shadow-xl image-full">
      <figure>
        <img
          src="https://play-lh.googleusercontent.com/IT-4gpRmMwvtYlw5M3JbamStGWlDArwYDXaWex0kbhEy-jyb5txK2Ri4GtS6syghui8"
          alt="Shoes"
        />
      </figure>
      <div class="card-body flex-row justify-between">
        <div class="">
          <h2 class="card-title text-2xl">Send</h2>
          <p class="text-lg font-semibold">Secure and Fast</p>
          <ul>
            <li>- Semarang</li>
            <li>- Ungaran</li>
            <li>- Banyumanik</li>
          </ul>
        </div>
        <div class="flex items-end">
          <button class="btn btn-outline">Buy Now</button>
        </div>
      </div>
    </article>

    <article class="card card-compact bg-primary/10">
      <div class="card-body">
        <h2 class="card-title">Trending Products</h2>
        <div class="overflow-x-scroll flex flex-row gap-2 sm:gap-6">
          <ProductCard
            v-for="dataRelated in dataRelateds"
            :key="dataRelated.name"
            :data="dataRelated"
          />
        </div>
      </div>
    </article>

    <article class="card shadow-xl image-full">
      <figure>
        <img
          src="https://thumb.viva.id/vivabandung/665x374/2024/04/12/66194d8124f4b-aplikasi-dana_bandung.jpg"
          alt="Shoes"
        />
      </figure>
      <div class="card-body flex-row justify-between">
        <div class="">
          <h2 class="card-title text-2xl">Pay With</h2>
          <p class="text-lg font-semibold">Secure and Fast</p>
          <ul>
            <li>- Dana</li>
            <li>- Ovo</li>
            <li>- Mandiri</li>
          </ul>
        </div>
        <div class="flex items-end">
          <button class="btn btn-outline">Buy Now</button>
        </div>
      </div>
    </article>

    <article class="card card-compact bg-accent/10">
      <div class="card-body">
        <h2 class="card-title">Best Sellers</h2>
        <div class="overflow-x-scroll flex flex-row gap-2 sm:gap-6">
          <ProductCard
            v-for="dataRelated in dataRelateds"
            :key="dataRelated.name"
            :data="dataRelated"
          />
        </div>
      </div>
    </article>
  </section>
</template>
<script lang="ts" setup>
import { dataRelateds } from "~/assets/example/dataRelateds"
import IconsBread from "~/components/Icons/Bread.vue"
import IconsChocolate from "~/components/Icons/Choco.vue"
import IconsGrapes from "~/components/Icons/Grapes.vue"
import IconsMilk from "~/components/Icons/Milk.vue"
import type { ItemIcons } from "~/types/icon"

const dataCategory: ItemIcons[] = [
  { link: "/grapes", icon: IconsGrapes, title: "Grapes" },
  { link: "/chocolate  ", icon: IconsChocolate, title: "Chocolate" },
  { link: "/Milk", icon: IconsMilk, title: "Milk" },
  { link: "/Bread", icon: IconsBread, title: "Bread" },
]
</script>
