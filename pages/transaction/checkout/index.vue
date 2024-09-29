<template>
  <!-- i wrong is must be detail not many -->
  <!-- <PageTransactionTrolly :data="dataProducts" /> -->

  <section class="space-y-2">
    <div class="rounded-lg bg-base-100 p-4 shadow space-y-3">
      <h1 class="text-lg font-semibold">
        Name User : <span>{{ user?.name }}</span>
      </h1>
      <div class="grid grid-cols-2">
        <p class="text-sm font-medium">
          Email : <span>{{ user?.email }}</span>
        </p>
        <p class="text-sm font-medium">
          Phone : <span>{{ user?.phone }}</span>
        </p>
      </div>
      <p class="text-sm font-medium">
        Address :
        <span> {{ user?.address }} </span>
      </p>
    </div>

    <TrolleyItem />

    <div class="rounded-lg bg-base-100 p-4 shadow">
      <h1 class="text-lg font-semibold">Payment</h1>
      <div class="space-y-2">
        <div class="">
          <label class="text-sm font-light">Name Bank</label>
          <input
            class="input input-bordered input-sm w-full"
            type="text"
            v-model="store.nameBank"
            placeholder="Mandiri"
          />
        </div>

        <div class="">
          <label class="text-sm font-light">No Req</label>
          <input
            class="input input-bordered input-sm w-full"
            type="text"
            v-model="store.noReq"
            placeholder="example (123 12312 123123 12312)"
          />
        </div>
      </div>
    </div>

    <div class="rounded-lg bg-base-100 p-4 shadow">
      <h1 class="text-lg font-semibold">Shipping</h1>
      <div class="space-y-2">
        <div class="">
          <label class="text-sm font-light">Name Delivery</label>
          <input
            class="input input-bordered input-sm w-full"
            type="text"
            v-model="store.nameShipping"
            placeholder="JNT"
          />
        </div>

        <div class="">
          <label class="text-sm font-light">Phone</label>
          <input
            class="input input-bordered input-sm w-full"
            type="text"
            v-model="store.phoneShipping"
            placeholder="example (082 1234 123)"
          />
        </div>
      </div>
    </div>

    <div class="rounded-lg bg-base-100 p-4 shadow space-y-2">
      <div class="grid gap-2">
        <div class="flex items-center justify-between">
          <span class="text-sm font-medium">Subtotal</span>
          <span class="text-sm font-medium">{{ getRupiah(123423) }} </span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm font-medium">Shipping</span>
          <span class="text-sm font-medium">{{ getRupiah(23423) }}</span>
        </div>
        <div class="divider my-0"></div>
        <div class="flex items-center justify-between">
          <span class="text-lg font-semibold">Total</span>
          <span class="text-lg font-semibold">{{ getRupiah(2342) }}</span>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
        <button @click="() => transactionApply(1)" class="btn btn-info btn-sm">
          Apply
        </button>
        <NuxtLink :to="`/transaction/checkout/`" class="btn btn-sm"
          >Back</NuxtLink
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import TrolleyItem from "./TrolleyItem.vue"

definePageMeta({
  layout: "transaction",
})

const { user } = useUserSession()
const { transactionApply } = useUseTransaction()
const store = reactive({
  nameBank: "",
  noReq: "",
  nameShipping: "",
  phoneShipping: "",
})
</script>
