<template>
  <CardInit :title="'Confirm'">
    <!--  <Option /> -->
    <div class="flex justify-between flex-col">
      <div class="flex gap-2">
        <div class="join w-full">
          <div
            class="join-item input input-bordered flex items-center gap-2 input-sm w-full"
          >
            <input
              v-model="store.search"
              type="text"
              class="grow"
              placeholder="Search"
            />
          </div>
          <button class="join-item btn btn-sm">
            <IconsSearch />
          </button>
        </div>
      </div>

      <div class="my-2">
        <div class="bg-base-100 flex justify-end gap-2">
          <!-- <ElSelect
          v-model:select="store.category"
          class="z-20"
          :data="staticLink.category"
        /> -->

          <ElSelect
            v-model:select="store.stock"
            class="z-20"
            :data="staticLink.stock"
          />
          <ElSelect
            v-model:select="store.price"
            class="z-20"
            :data="staticLink.price"
          />
        </div>
      </div>
    </div>
    <!--  -->
    <ElTables>
      <thead>
        <tr>
          <th>Buyer</th>
          <th>Product Name</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody>
        <ElEmptyTable
          :text="'Not Have Order Product'"
          :span="3"
          v-if="data.length === 0"
        />
        <tr v-else v-for="item in data" :key="item.id">
          <td>
            <div class="space-y-2">
              <p class="badge badge-outline">
                {{ item.status }}
              </p>
              <div class="font-bold">{{ item.User.name }}</div>
              <div class="text-sm opacity-50">
                {{ item.User.address }}
              </div>
              <div>{{ getPhone(item.User.phone ?? "") }}</div>
            </div>
          </td>
          <td>
            <div
              class="flex gap-2 space-y-2"
              v-for="box in item.Trolley"
              :key="box.id"
            >
              <ElError v-if="!box.Product" text="error" />
              <div v-else class="flex items-center gap-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      :src="box.Product.image ?? ''"
                      :alt="box.Product.name ?? ''"
                    />
                  </div>
                </div>
              </div>
              <ElError v-if="!box.Product" text="error" />
              <div v-else class="space-y-1">
                <div class="font-bold">{{ box.Product.name }}</div>
                <!-- <div class="text-sm opacity-50">{{ box.Product.brand }}</div> -->
                <div class="">{{ getRupiah(box.Product.price) }}</div>
                <div class="">qty : {{ box.qty }}</div>
              </div>
            </div>
          </td>
          <td class="space-y-2">
            <div class="">
              <p>
                <!-- get total price and qty -->
                {{ getRupiah(totalProduct) }}
              </p>
            </div>
            <NuxtLink
              class="btn btn-outline btn-xs"
              :to="`/market/history/${item.id}`"
            >
              details
            </NuxtLink>
          </td>
        </tr>
      </tbody>
    </ElTables>
  </CardInit>
</template>

<script lang="ts" setup>
// import Option from "./Option.vue"
// import Table from "./Table.vue"

const { data } = defineProps<{ data: TransClient[] }>()
const { store } = useMarket()

const totalProduct = computed(() =>
  data
    .flatMap((t) => t.Trolley)
    .map((t) => t.Product.price)
    .reduce((a, b) => a + b, 0)
)
</script>
