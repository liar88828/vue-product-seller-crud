<template>
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
            :to="`/market/confirm/${item.id}`"
          >
            details
          </NuxtLink>
        </td>
      </tr>
    </tbody>
  </ElTables>
</template>

<script lang="ts" setup>
const props = defineProps<{
  data: TransClient[]
}>()
const totalProduct = computed(() =>
  props.data
    .flatMap((t) => t.Trolley)
    .map((t) => t.Product.price)
    .reduce((a, b) => a + b, 0)
)
</script>
