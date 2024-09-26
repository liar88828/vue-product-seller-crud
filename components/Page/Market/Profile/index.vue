<template>
  <div ref="refImage">
    <CardInit>
      <div class="flex justify-between items-center">
        <ElError v-if="!data" />
        <Title v-else :data="data" />
      </div>

      <div class="grid gap-6 md:grid-cols-2 mt-5">
        <div class="space-y-5">
          <!--  -->
          <ElError v-if="!data" />
          <Basics v-else :data="data" />
          <!--  -->
          <!-- <ElError v-if="!resContact" />
          <Contact v-else :data="resContact.contact" /> -->
          <!--  -->
          <!-- <ElError v-if="!resSocial" />
          <Social v-else :data="resSocial.social" /> -->
        </div>
        <ElError v-if="!data" />
        <Describe v-else :data="data" />
      </div>

      <div class="flex gap-2">
        <NuxtLink to="/market/profile/edit" class="btn btn-primary"
          >Edit
        </NuxtLink>
        <button @click="() => clickImage" class="btn btn-info">Save</button>
      </div>
    </CardInit>
  </div>
</template>

<script lang="ts" setup>
import type {
  MarketClient,
  MarketServiceSingleClient,
} from "~/types/market/ProfileCompany"
import Describe from "./Describe.vue"
import Basics from "./Basics.vue"
import Contact from "./Contact.vue"
import Social from "./Social.vue"
import Title from "./Title.vue"

const { data: resContact } = await useFetch("/api/market/profile/info/contact")
const { data: resSocial } = await useFetch("/api/market/profile/info/social")
// const { data: resAdditional } = await useFetch("/api/market/profile/info/additional")

defineProps<{ data: MarketClient }>()

const { clickImage, refImage } = useImages("Market Profile")
</script>
