<template>
  <div v-if="pending">Loading ...</div>
  <div v-else-if="error">Error: {{ error.message }}</div>
  <PageHome v-else v-show="!pending && !error" :data="sendData" />
</template>

<script lang="ts" setup>
import { dataCategory } from "~/assets/link/shopLink"
import { dataAdv, dataAdv2 } from "~/assets/example/home/dataAdv"
import type { HomeProps } from "~/types/home/props"

const { session, fetch } = useUserSession()
const { data, pending, error } = await useFetch("/api/home")
// const session = useCookie("sessionUser")
watch(data, () => {
  // console.log(session.value, "is session user")
  console.log(data.value)
})
if (!data.value) {
  throw new Error("data not found")
}
const sendData: HomeProps = {
  category: dataCategory,
  adv: dataAdv,
  adv2: dataAdv2,
  newProducts: data.value.trending,
  trending: data.value.trending,
  bestSellers: data.value.bestProduct,
}
// console.log(sendData)
</script>
