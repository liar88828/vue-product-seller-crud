<template>
  <Basics/>
  <Contact/>
  <Describe/>
  <Social/>
</template>

<script lang="ts" setup>
import Basics from "./Basics.vue"
import Contact from "./Contact.vue"
import Describe from "./Describe.vue"
import Social from "./Social.vue"
import { definePageMeta } from "#imports";

// const { session } = useUserSession()
// if (session.value.session.createMarket) {
//   throw navigateTo("/market/profile")
// }

definePageMeta({
  middleware: ['market']
})
</script>
