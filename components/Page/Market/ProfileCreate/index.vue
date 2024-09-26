<template>
  <Basics />
  <!-- <Contact />
  <Describe />
  <Social /> -->
  <!-- {{ session }} -->
</template>

<script lang="ts" setup>
import Basics from "./Basics.vue"
import Contact from "./Contact.vue"
import Describe from "./Describe.vue"
import Social from "./Social.vue"

const { session } = useUserSession()
// if (session.value.session.createMarket) {
//   throw navigateTo("/market/profile")
// }

definePageMeta({
  middleware: ["market"],
})
</script>
