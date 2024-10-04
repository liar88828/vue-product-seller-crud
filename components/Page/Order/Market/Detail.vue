<template>
  <div ref="refImage">
    <CardInit :class="'sm:card-normal'">
      <!--  -->
      <ElTransactionQr :data="data.Market" :full-url="fullUrl">
        <p class="badge badge-info w-fit">
          {{ data.status }}
        </p>
      </ElTransactionQr>

      <!--  -->
      <ElDivider class="my-0" />
      <ElTransactionUserBuy :id_user="data.id_buyer" />
      <ElDivider class="my-0" />
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
            <tr v-for="item in data.Trolley">
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
      <ElDivider class="my-0" />
      <div class="gap-4">
        <div>
          <h3 class="nota-title">
            <IconsHistory />
            <span> Purchase Information </span>
          </h3>
          <div class="gap-2 flex flex-col">
            <div class="flex items-center justify-between">
              <div class="font-medium">Order Date</div>
              <div>{{ getDate(data.createdAt) }}</div>
            </div>
            <div class="flex items-center justify-between">
              <div class="font-medium">Expire Delivery Date</div>
              <div>{{ getDate(data.dateExp) }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between">
        <div className="font-medium">Total Product</div>
        <div className="font-medium">{{ getRupiah(total) }}</div>
      </div>

      <div class="grid grid-cols-1 gap-2">
        <button @click="clickImage" class="btn btn-info">Save Image</button>
        <button class="btn btn-primary" @click="$emit('confirmTransaction')">
          Confirm
        </button>
        <button class="btn btn-error" @click="$emit('rejectTransaction')">
          Reject
        </button>
      </div>
    </CardInit>
  </div>
</template>

<script lang="ts" setup>
import type { TransactionConfirmClient } from "~/types/market/order"

const props = defineProps<{ data: TransactionConfirmClient }>()
defineEmits<{
  (e: "confirmTransaction"): void
  (e: "rejectTransaction"): void
}>()

const route = useRoute()
let url = ""
onMounted(() => {
  if (process.client) {
    url = window.location.host
  }
})
const fullUrl = computed(() => `https://${url}${route.fullPath}`)
const { clickImage, refImage } = useImages("purchase")

const total = props.data.Trolley.map(
  (t) =>
    // t.price
    t.Product.price * t.qty
).reduce((a, b) => a + b, 0)
const { formatRupiah, totalNumber } = useFormat()
</script>
