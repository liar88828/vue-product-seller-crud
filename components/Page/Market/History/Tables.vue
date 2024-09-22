<template>
  <Table class="static">
    <thead>
      <tr>
        <th>Name</th>
        <th>Qty</th>
        <th>Total</th>
        <th>Action</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="item in data" :key="item.id">
        <td class=" ">
          <div class="font-bold">{{ item.name }}</div>
          <div class="text-xs opacity-50">{{ item.brand }}</div>
        </td>
        <td>
          <div class="font-bold">{{ getRupiah(item.price) }}</div>
          <div class="text-xs opacity-50">{{ item.stock }} pcs</div>
        </td>
        <td>
          {{ getTotal(item.price, item.stock) }}
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
  data: HistoryClient["Box"]
}>()
</script>
