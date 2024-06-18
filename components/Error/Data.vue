<template>
  <!--
// v0 by Vercel.
// https://v0.dev/t/Ag7hsFEdICt
-->

  <Card class="bg-base-100">
    <CardBody>
      <div class="text-space-y-4 text-center">
        <IconsBox class="mx-auto h-16 w-16 space-y-5" />
        <h1 class="my-2 text-3xl font-bold">Data Not Found</h1>
        <p class="my-2 text-xl font-semibold">{{ message }}</p>
        <p class="my-2">
          Error Code: <span class="text-lg font-semibold">{{ code }}</span>
        </p>
        <CardAction class="justify-between mt-6">
          <div class="flex gap-2">
            <NuxtLink :href="link?.back" class="btn btn-outline">Back</NuxtLink>
            <button
              class="btn btn-outline"
              :disabled="refreshing"
              @click="refreshAll"
            >
              Refresh
            </button>
          </div>
          <NuxtLink
            v-show="link?.resolve"
            :href="link?.resolve?.link"
            class="btn btn-info btn-outline"
            >{{ link?.resolve?.text }}</NuxtLink
          >
        </CardAction>
      </div>
    </CardBody>
  </Card>
</template>

<script lang="ts" setup>
const refreshing = ref(false)
const refreshAll = async () => {
  refreshing.value = true
  try {
    await refreshNuxtData("market_id")
  } finally {
    refreshing.value = false
  }
}
defineProps({
  link: {
    type: Object as PropType<{
      back: string
      resolve?: {
        text: string
        link: string
      }
    }>,
  },
  message: {
    type: String,
    required: true,
  },
  code: {
    type: Number,
    default: 0,
    required: false,
  },
})
</script>
