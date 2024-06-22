<template></template>

<script setup lang="ts">
import type { MarketServerFull } from "~/types/market/ProfileCompany"
import Contact from "./Contact.vue"
import Social from "./Social.vue"
import Basics from "./Basics.vue"

defineProps<{
  data: MarketServerFull
}>()
</script>
