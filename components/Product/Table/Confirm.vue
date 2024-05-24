<template>
  <section class="card bg-base-100 card-compact">
    <div class="card-body">
      <div class="overflow-x-auto">
        <table class="table table-xs table-zebra">
          <!-- head -->
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <th>Buyer</th>
              <th>Product Name</th>
              <th>Total</th>
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
                <div class="">
                  <div class="font-bold">{{ data.userBuy.name }}</div>
                  <div class="text-sm opacity-50">
                    {{ data.userBuy.address }}
                  </div>
                  <div>{{ formatPhone(data.userBuy.phone) }}</div>
                </div>
              </td>
              <td>
                <div
                  class="justify-between flex"
                  v-for="trolly in data.trolly"
                  :key="trolly.id"
                >
                  <div class="flex items-center gap-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img
                          :src="trolly.image ?? ''"
                          :alt="trolly.name ?? ''"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <div class="font-bold">{{ trolly.name }}</div>
                    <div class="text-sm opacity-50">{{ trolly.brand }}</div>
                    <div class="">{{ formatRupiah(trolly.price) }}</div>
                  </div>
                </div>
              </td>
              <td>
                <!-- get total price and qty -->
                {{
                  formatRupiah(
                    data.trolly
                      .map((t) => t.price * t.stock)
                      .reduce((a, b) => a + b, 0)
                  )
                }}
              </td>

              <td>
                <NuxtLink
                  class="btn btn-outline btn-xs"
                  :to="`/market/confirm/detail/${data.id}`"
                >
                  details</NuxtLink
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { dataProduct } from '~/assets/example/dataPurchase'


const { formatRupiah, formatNumber, totalNumber, formatPhone } = useFormat()
</script>
