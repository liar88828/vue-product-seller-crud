<template>
  <div class="rounded-lg bg-base-100 p-4 shadow">
    <h1 class="text-lg font-semibold">Product List</h1>
    <!-- Data trolley mark -->
    <div class="overflow-y-scroll h-52 space-y-3 p-1">
      <section class="" v-for="item in data">
        <div class="rounded-lg p-1 grid grid-cols-6 gap-2 bg-base-200">
          <div class="col-span-2">
            <img
              src="https://picsum.photos/200"
              alt="random-image"
              class="h-auto w-32"
            />
          </div>
          <div class="col-span-4">
            <h1 class="text-lg font-semibold">{{ item.Product.name }}</h1>
            <p class="text-lg font-medium">
              <span>{{ getRupiah(item.Product.price) }}</span>
            </p>
            <p class="text-sm font-medium">
              Qty
              <span>{{ item.qty }}</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ data: TrolleyProduct[] }>()
</script>
