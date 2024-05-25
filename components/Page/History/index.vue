<template>
  <section class="card bg-base-100 card-compact">
    <div class="card-body">
      <h1 class="card-title">History</h1>
      <!-- list history -->

      <ProductCardContainer
        v-for="data in dataPurchase"
        class="bg-error/20"
        :title="data.userBuy.name ?? ''"
      >
        <div class="">
          <h1 class="">transaction</h1>
          <p>12/12/2022</p>

          <div class="">
            <h1>Product</h1>
            <table>
              <thead>
                <tr>
                  <th class="border border-slate-600">Name</th>
                  <th class="border border-slate-600">Price</th>
                  <th class="border border-slate-600">Qty</th>
                  <th class="border border-slate-600">Total</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="item in data.trolly">
                  <td class="border border-slate-600">
                    {{ item.name }}
                  </td>
                  <td class="border border-slate-600">
                    {{ formatRupiah(item.price) }}
                  </td>
                  <td class="border border-slate-600">
                    {{ item.stock }}
                  </td>
                  <td class="border border-slate-600"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </ProductCardContainer>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { Purchase } from "~/types/product/purchase"

defineProps<{
  dataPurchase: Purchase[]
}>()

const { formatNumber, formatRupiah } = useFormat()
</script>
<!-- <ProductCard
          v-for="dataRelated in dataRelateds"
          :key="dataRelated.id"
          :data="dataRelated"
          :detail="true"
        /> -->
