<template>
  <div class="bg-base-100 card card-compact sm:card-normal" ref="refImage">
    <div class="card-body">
      <div class="gap-6">
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <IconsCardBoardClose />
            <div class="text-2xl font-medium">{{ company.name }}</div>
          </div>

          <div class="">
            <h2 class="text-2xl font-bold">{{ company.address }}</h2>
          </div>
          <div class="">
            <div class="gap-4 mt-5">
              <p class="text-xl font-semibold">{{ company.contact.email }}</p>
              <p class="text-xl font-semibold">
                {{ formatPhone(company.contact.phone) }}
              </p>
            </div>
          </div>
        </div>
        <div class="flex justify-end"></div>
      </div>
      <ElementsDivider />
      <div class="gap-4">
        <div>
          <h3 class="text-2xl font-bold mb-5">Customer Information</h3>
          <div class="gap-2 flex flex-col">
            <div class="flex items-center justify-between">
              <div class="font-medium">Name</div>
              <div>{{ data.userBuy.name }}</div>
            </div>
            <div class="flex items-center justify-between">
              <div class="font-medium">Phone</div>
              <div>{{ formatPhone(data.userBuy.phone ?? "") }}</div>
            </div>
            <div class="flex items-center justify-between">
              <div class="font-medium">Address</div>
              <div>{{ data.userBuy.address }}</div>
            </div>
          </div>
        </div>
      </div>
      <ElementsDivider />


      <div
        class="relative w-full overflow-auto border rounded border-slate-600"
      >
        <table class="table table-zebra table-xs table-auto sm:table-sm">
          <thead>
            <tr>
              <th class="border border-slate-600">Nama</th>
              <th class="border border-slate-600">Brand</th>
              <th class="border border-slate-600">Qty</th>
              <th class="border border-slate-600">Price</th>
              <th class="border border-slate-600">Total</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in data.trolly">
              <td class="border border-slate-600">
                <div class="flex items-center gap-3">
                  <IconsCardBoardClose />
                  <div class="font-bold">{{ item.name }}</div>
                </div>
              </td>
              <td class="border border-slate-600">
                {{ item.brand }}
              </td>
              <td class="border border-slate-600">{{ item.stock }}</td>
              <td class="border border-slate-600">
                {{ formatRupiah(item.price) }}
              </td>
              <td class="border border-slate-600">
                {{ totalNumber(item.price, item.stock) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex justify-between">
        <div className="text-2xl sm:text-3xl font-semibold ">Total</div>
        <div className="text-2xl sm:text-3xl font-semibold ">
          {{
            formatRupiah(
              data.trolly
                .map((t) => t.price * t.stock)
                .reduce((a, b) => a + b, 0)
            )
          }}
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-2 p-5">
    <button @click="() => clickImage" class="btn btn-info w-full">
      Save Image
    </button>
    <button class="btn btn-primary w-full">Confirm</button>
    <button class="btn btn-error w-fill">Delete</button>
  </div>
</template>

<script lang="ts" setup>
import { dataCompany } from "~/assets/example/dataCompany"
import type { Purchase } from "~/types/product/purchase"

defineProps<{
  data: Purchase
}>()
const company = dataCompany
const { formatPhone, formatRupiah, totalNumber } = useFormat()
const { clickImage, refImage } = useImage("purchase")
</script>
