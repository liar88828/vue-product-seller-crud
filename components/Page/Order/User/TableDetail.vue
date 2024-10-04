<template>
  <div
    class="relative w-full overflow-x-hidden border rounded border-slate-600"
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
        <tr v-for="item in data">
          <ElError v-if="!item.Product" text="error" />
          <td v-else class="border border-slate-600">
            <div class="flex items-center gap-3">
              <IconsCardBoardClose />
              <div class="font-bold">
                {{ getTextSplit(item.Product.name, 20) }}
              </div>
            </div>
          </td>
          <ElError v-if="!item.Product" text="error" />

          <td v-else class="border border-slate-600">
            {{ item.Product.brand }}
          </td>

          <ElError v-if="!item.Product" text="error" />
          <td v-else class="border border-slate-600">
            {{ item.Product.stock }}
          </td>
          <ElError v-if="!item.Product" text="error" />
          <td v-else class="border border-slate-600">
            {{ formatRupiah(item.Product.price) }}
          </td>
          <ElError v-if="!item.Product" text="error" />

          <td v-else class="border border-slate-600">
            {{ totalNumber(item.Product.price, item.qty) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: TransactionConfirmClient["Trolley"]
}>()

const { formatRupiah, totalNumber } = useFormat()
</script>
