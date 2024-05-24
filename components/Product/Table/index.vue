<template>
  <section class="card bg-base-100 card-compact">
    <div class="card-body">
      <ProductTableOption />
      <div class="overflow-x-auto">
        <table class="table table-xs table-zebra bg-base-200">
          <!-- head -->
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <!-- row 1 -->
            <tr v-for="data in dataProduct" :key="data.id">
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>
                <div class="flex items-center gap-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img :src="data.image ?? ''" :alt="data.name ?? ''" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">{{ data.name }}</div>
                    <div class="text-sm opacity-50">{{ data.brand }}</div>
                  </div>
                </div>
              </td>
              <td>
                {{ formatRupiah(data.price) }}
              </td>
              <td>
                {{ formatNumber(data.stock) }}
              </td>
              <th>
                <NuxtLink
                  class="btn btn-outline btn-xs"
                  :to="`/market/product/detail/${data.id}`"
                >
                  details</NuxtLink
                >
              </th>
            </tr>
          </tbody>
          <!-- foot -->
          <!-- <tfoot></tfoot> -->
        </table>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ProductItem } from "~/types/product/item"

const { formatRupiah, formatNumber } = useFormat()
const dataProduct: ProductItem[] = [
  {
    brand: "Hart Hagerty",
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    name: "Shoes",
    price: 123,
    stock: 10,
    id: "1",
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
          "Powerful noise-cancelling technology",
          "Wireless Bluetooth connectivity",
          "Long-lasting battery life",
          "Comfortable and adjustable design",
        ],
      },
    ],
  },
  {
    brand: "Hart Hagerty",
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    name: "Shoes",
    price: 123,
    stock: 10,
    id: "23423",
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
          "Powerful noise-cancelling technology",
          "Wireless Bluetooth connectivity",
          "Long-lasting battery life",
          "Comfortable and adjustable design",
        ],
      },
    ],
  },
  {
    brand: "Hart Hagerty",
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    name: "Shoes",
    price: 123,
    stock: 10,
    id: "2",
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
          "Powerful noise-cancelling technology",
          "Wireless Bluetooth connectivity",
          "Long-lasting battery life",
          "Comfortable and adjustable design",
        ],
      },
    ],
  },
]
</script>

<style></style>
