<template>
  <div ref="refImage">
    <CardInit>
      <div class="flex justify-between items-center">
        <ElError v-if="!data.Market" />
        <Title v-else :data="data.Market" />
      </div>

      <div class="grid gap-6 md:grid-cols-2 mt-5">
        <div class="space-y-5">
          <ElError v-if="!data.Market" />
          <Basics v-else :data="data.Market" />
          <ElError v-if="!data.Contact" />
          <Contact v-else :data="data.Contact" />
          <ElError v-if="!data.SocialMedia" />
          <Social v-else :data="data.SocialMedia" />
        </div>
        <ElError v-if="!data.Market" />
        <Describe v-else :data="data.Market" />
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
import Describe from "./Describe.vue"
import Basics from "./Information/Basics.vue"
import Contact from "./Information/Contact.vue"
import Social from "./Information/Social.vue"
import Title from "./Information/Title.vue"

defineProps<{ data: MarketServiceSingle }>()

const { clickImage, refImage } = useImages("Market Profile")
</script>
