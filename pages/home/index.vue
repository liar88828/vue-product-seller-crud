<template>
  <Suspense>
    <template #fallback>Loading.....</template>
    <template #default>
      <div v-if="pending">Loading ...</div>
      <div v-else-if="error">Error: {{ error.message }}</div>
      <PageHome v-show="!pending && !error" v-else :data="sendData" />
    </template>
  </Suspense>
</template>

<script lang="ts" setup>
import { dataCategory } from "~/assets/link/shopLink"
import { dataAdv, dataAdv2 } from "~/assets/example/home/dataAdv"
import type { HomeApi, HomeProps } from "~/types/home/props"

const { data, pending, error } = await useFetch("/api/home")
const session = useCookie("sessionUser")
watch(data, () => {
  console.log(session.value, "is session user")
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
const sendData: HomeProps = {
  category: dataCategory,
  adv: dataAdv,
  adv2: dataAdv2,
  newProducts: data.value.data.newProduct,
  trending: data.value.data.trending,
  bestSellers: data.value.data.bestProduct,
}
// console.log(sendData)
</script>
