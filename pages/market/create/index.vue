<template>
  <Basics />
  <Contact />
  <Describe />
  <Social />
</template>

<script lang="ts" setup>
import Basics from "./Basics.vue"
import Contact from "./Contact.vue"
import Describe from "./Describe.vue"
import Social from "./Social.vue"

const { data, pending } = await useFetch("/api/market/profile/check")
console.log(data.value, "market profile check")
if (data.value) {
  if (data.value.market.create) {
    await navigateTo("/market/profile")
  } else {
    await navigateTo("/market/create")
  }
}
</script>
