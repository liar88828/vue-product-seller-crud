<template>
  <!--
// v0 by Vercel.
// https://v0.dev/t/go7HyHEA5ur
-->

  <CardInit ref="refImage">
    <div class="flex justify-between items-center gap-5">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold">{{ data.name }}</h1>
        <p class="text-gray-500 dark:text-gray-400">
          {{ data.industry }}
        </p>
      </div>
      <button @click="() => clickImage" class="btn btn-info">Save</button>
    </div>

    <div class="grid gap-6 md:grid-cols-2 mt-5">
      <ProfileMarketInformation :data="data" />
      <ProfileMarketDescribe :data="data" />
    </div>
  </CardInit>
</template>

<script lang="ts" setup>
import type { ProfileCompany } from "~/types/market/profile"

defineProps<{
  data: ProfileCompany
}>()

const { clickImage, refImage } = useImage("Market Profile")
</script>
