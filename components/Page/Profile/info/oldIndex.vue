<template>
  <div ref="refImage">
    <CardInit>
      <div class="flex justify-between items-center">
        <div class="space-y-2">
          <h1 class="text-3xl font-bold">{{ data.name }}</h1>
          <p class="text-gray-500 dark:text-gray-400">
            {{ data.industry }}
          </p>
        </div>
      </div>

      <div class="grid gap-6 md:grid-cols-2 mt-5">
        <!-- <Information :data="data" /> -->
        <Describe :data="data" />
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
  MarketServerFull,
  MarketServerFullNull,
} from "~/types/market/ProfileCompany"
import Describe from "../../../../pages/market/profile/info/Describe.vue"

defineProps<{ data: MarketClient }>()

const { clickImage, refImage } = useImages("Market Profile")
</script>
