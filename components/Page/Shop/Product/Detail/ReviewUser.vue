<template>
  <CardInit class="card-normal bg-base-100/70" :bg="false">
    <CardHeadTitle
      title="Customer Review"
      :class="'text-xl sm:text-2xl font-bold'"
    />
    <ElLoading v-if="pending" />
    <ElEmpty v-else-if="data?.preview.length === 0" />
    <ElError v-else-if="error || !data" />
    <Review
      v-else
      v-for="dataPreview in data.preview"
      :data="dataPreview"
      :key="dataPreview.id"
    />
  </CardInit>
</template>

<script lang="ts" setup>
import Review from "./Review.vue"
const { id } = useRoute().params
const { data, pending, error } = useFetch(`/api/product/preview/:id`, {
  params: {
    id: id,
  },
})
</script>
