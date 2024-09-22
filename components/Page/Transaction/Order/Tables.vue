<template>
  <Table class="static">
    <thead>
      <tr>
        <th>Name</th>
        <th>Qty</th>
        <th>Total</th>
        <!-- <th>Status</th> -->
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <ElEmptyTable
        v-if="data.length === 0"
        :span="3"
        :text="'Not Have Order Product'"
      />
      <!-- row 1 -->
      <tr v-for="{ Product, ...item } in data" v-else :key="item.id">
        <ElError v-if="!Product" />
        <td v-else>
          <div class="font-bold">{{ Product.name }}</div>
          <div class="text-xs opacity-50">{{ Product.brand }}</div>
        </td>
        <ElError v-if="!Product" />
        <td v-else>
          <div class="font-bold">{{ getRupiah(Product.price) }}</div>
          <div class="text-xs opacity-50">{{ Product.stock }} pcs</div>
        </td>
        <ElError v-if="!Product" />
        <td v-else>
          {{ getTotal(Product.price, Product.stock) }}
        </td>
        <!-- <td>
        <span :class="getStatus(status)"> {{ status }} </span>
      </td> -->
        <th>
          <NuxtLink
            :to="`/product/detail/${item.id}`"
            class="btn btn-sm btn-square sm:btn-block"
          >
            <IconsDetail class="h-5 w-5" />
            <span class="hidden sm:block">Detail</span>
          </NuxtLink>
        </th>
      </tr>
    </tbody>
  </Table>
</template>

<script lang="ts" setup>
defineProps<{
  data: TransClient["Box"]
}>()
</script>
