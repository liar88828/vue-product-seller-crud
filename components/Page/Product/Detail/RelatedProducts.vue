<template>
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <div v-else>
    <PageProductTitle :title="'New Products'">
      <button @click="() => {}" class="btn btn-sm">See more</button>
    </PageProductTitle>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-2"
    >
      <PageProductItem v-for="item in data.products" :data="item" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data, pending, error } = useFetch("/api/product/related")
</script>
