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
      <Table :data="data.Trolley" />
      <ElDivider class="my-0" />
      <Total :data="data" />
      <div class="grid grid-cols-1 gap-2">
        <button @click="clickImage" class="btn btn-info">Save Image</button>
        <!-- <button class="btn btn-primary" @click="$emit('confirmTransaction')">
          Confirm
        </button>
        <button class="btn btn-error" @click="$emit('rejectTransaction')">
          Reject
        </button> -->
      </div>
    </CardInit>
  </div>
</template>

<script lang="ts" setup>
import type { TransactionConfirmClient } from "~/types/market/order"
import Table from "./TableDetail.vue"
import Total from "./Total.vue"

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
</script>
