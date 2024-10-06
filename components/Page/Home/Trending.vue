<template>
  <ElLoading v-if="pending" />
  <ErrorNotFound v-else-if="error || !data" />
  <PageProductLoopHorizontal
    v-else
    :data="data.trending"
    :link="'/product?category=trending'"
    :title="'Trending'"
  />
</template>
<script lang="ts" setup>
const { data, pending, error } = await useProduct().trending()
</script>
