<template>
  <div class="space-y-5">
    <ElError v-if="!data"/>
    <Basics v-else :data="data"/>
    <ElError v-if="!data.Contact"/>
    <Contact v-else :data="data.Contact"/>
    <ElError v-if="!data.SocialMedia"/>
    <Social v-else :data="data.SocialMedia"/>

  </div>
</template>

<script setup lang="ts">
import type { MarketServerFull, } from "~/types/market/ProfileCompany"
import Contact from "./Contact.vue";
import Social from "./Social.vue";
import Basics from "./Basics.vue";

defineProps<{
  data: MarketServerFull
}>()
</script>
