<script setup lang="ts">
import type { ProductDetail } from "~/types/product/detail"

const { id } = useRoute().params
const { data, error } = await useFetch<ProductDetail>(`/api/shop/${id}`)
if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" })
}
</script>

<template>
  <!-- @vue-expect-error -->
  <PageProductDetail
    :dataDetail="data?.dataDetail"
    :static="data?.static"
    :dataRelated="data?.dataRelated"
    :data-previews="data?.dataPreviews"
  />
</template>
