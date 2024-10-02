<template>
  <!-- i wrong is must be detail not many -->
  <!-- <PageTransactionTrolly :data="dataProducts" /> -->

  <section class="space-y-4">
    <ElLoading v-if="!userData" />
    <div v-else class="rounded-lg bg-base-100 p-4 shadow space-y-3">
      <h1 class="text-lg font-semibold">
        Name User : <span>{{ userData?.user.name }}</span>
      </h1>
      <div class="grid grid-cols-2">
        <p class="text-sm font-medium">
          Email :
          <span>{{ userData?.user.email }}</span>
        </p>
        <p class="text-sm font-medium">
          Phone : <NotComplete :item="userData?.user.phone" />
        </p>
      </div>
      <p class="text-sm font-medium">
        Address : <NotComplete :item="userData?.user.address" />
      </p>
    </div>
    <ElLoading v-if="pending" />
    <ErrorNotFound v-else-if="!data || error" />
    <ErrorNotFound
      :title="'Empty Data Trolley'"
      :description="'The data trolley is Empty please add mark in trolley page'"
      :code="404"
      :linkTitle="'Add Mark Trolley'"
      link="/user/trolley"
      v-else-if="data.trolley.length === 0"
    />
    <TrolleyItem v-else :data="data.trolley" />

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
            type="tel"
            v-model="store.noReq"
            placeholder="example (123 12312 123123 12312)"
          />
        </div>
      </div>
    </div>

    <div class="rounded-lg bg-base-100 p-4 shadow">
      <h1 class="text-lg font-semibold">Shipping</h1>
      <div class="space-y-2">
        <div>
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
            type="tel"
            @input="
              () => {
                store.phoneShipping = formatPhoneNumber()
              }
            "
            v-model="phoneNumber"
            placeholder="example (082 1234 123)"
          />
        </div>
      </div>
    </div>

    <div class="rounded-lg bg-base-100 p-4 shadow space-y-2">
      <div class="grid gap-2">
        <div class="flex items-center justify-between">
          <span class="text-sm font-medium">Subtotal</span>
          <span class="text-sm font-medium">
            {{ data?.trolley ? getRupiah(calculateTrolley(data.trolley)) : 0 }}
          </span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm font-medium">Shipping</span>
          <span class="text-sm font-medium">{{ getRupiah(shipping) }}</span>
        </div>
        <div class="divider my-0"></div>
        <div class="flex items-center justify-between">
          <span class="text-lg font-semibold">Total</span>
          <span class="text-lg font-semibold">
            {{
              data?.trolley
                ? getRupiah(calculateTrolley(data.trolley) + shipping)
                : 0
            }}
          </span>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
        <button
          type="button"
          :disabled="!isDisable"
          @click="onCheckout"
          class="btn btn-info btn-sm"
        >
          Checkout
        </button>
        <NuxtLink :to="`/transaction/checkout/edit`" class="btn btn-sm">
          Back
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import TrolleyItem from "./TrolleyItem.vue"
import NotComplete from "./NotComplete.vue"

definePageMeta({
  layout: "transaction",
})
const { data: userData } = await useUser().getUserBySession()
const { calculateTrolley, getMarkTrolley } = useTrolley()
const { data, pending, error } = await getMarkTrolley()

const { checkout } = useTransaction()
const shipping = 10_000
const store = reactive({
  nameBank: "",
  noReq: "",
  nameShipping: "",
  phoneShipping: "",
})

const { formatPhoneNumber, phoneNumber } = usePhoneNumberFormatter()

const isDisable = computed(() => {
  // console.log(userNotComplete.address)
  // console.log(userNotComplete.phone)
  if (userNotComplete.address !== "" && userNotComplete.phone !== "") {
    userNotComplete.isComplete = true
    // console.log("is true")
    return true
  } else {
    // console.log("is false")
    return false
  }
})
const onCheckout = async () => {
  const getTrolley = (trolley: TrolleyProduct[]): CheckoutTrolley[] =>
    trolley.map((d) => {
      return {
        id_trolley: d.id,
        id_market: d.Product.id_market,
        qty: d.qty,
        price: d.Product.price,
      }
    })

  checkout({
    transaction: {
      drop_address: userData.value?.user.address ?? "",
      id_buyer: userData.value?.user.id ?? "",
    },
    trolley: getTrolley(data?.value?.trolley as TrolleyProduct[]),
  })
}

const userNotComplete = reactive({
  address: userData.value?.user.address ?? "",
  phone: userData.value?.user.phone ?? "",
  isComplete: false,
})
</script>
