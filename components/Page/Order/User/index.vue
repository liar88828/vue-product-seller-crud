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
    <TableAll :data="data" />
  </CardInit>
</template>

<script lang="ts" setup>
import TableAll from "./TableAll.vue"

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
