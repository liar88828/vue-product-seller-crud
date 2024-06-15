<template>
  <div ref="refImage" class="profile-edit">
    <CardInit>
      <div class="flex justify-between items-center">
        <div class="space-y-2">
          <input
            class="text-3xl font-bold bg-transparent"
            v-model="store.name"
          />

          <input
            class="text-gray-500 dark:text-gray-400"
            v-model="store.industry"
          />
        </div>
      </div>

      <div class="grid gap-6 md:grid-cols-2 mt-5 w-full">
        <Information :data="data" />
        <Describe :data="data" />
      </div>
      <button @click="handleSave" class="btn btn-info">Save</button>
    </CardInit>
  </div>
</template>

<script lang="ts" setup>
import type { ProfileMarket } from "~/types/market/ProfileCompany"
import Information from "./Information.vue"
import Describe from "./Describe.vue"
import { useCompany } from "~/composables/profile/useCompany"

const props = defineProps<{
  data: ProfileMarket
}>()

const { handleSave, store } = useCompany(props.data)
</script>
