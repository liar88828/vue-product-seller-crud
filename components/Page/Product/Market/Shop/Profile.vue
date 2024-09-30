<!-- User  -->
<template>
  <!--  -->
  <section class="card card-compact bg-base-100">
    <div class="card-body">
      <h1 title="Market" :class="'text-xl sm:text-2xl font-bold'" />
      <div class="flex flex-row justify-between h-full">
        <div class="flex-auto">
          <h2 class="text-md sm:text-xl md:text-2xl font-bold mb-2">
            {{ profile.name }}
          </h2>
        </div>
        <div class="flex flex-row gap-2">
          <NuxtLink
            :to="`#`"
            class="btn sm:btn-outline btn-sm btn-square sm:btn-md flex-nowrap flex"
          >
            <IconsPersonAdd class="size-5" />
          </NuxtLink>
        </div>
      </div>
      <ElLoading v-if="pending" />
      <ElError v-if="!data" />
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-1 flex-auto">
        <dl class="flex items-center gap-2 justify-between">
          <dt class="text-xs sm:text-lg">Follow</dt>
          <dd class="font-bold text-xs sm:text-sm md:text-lg">
            {{ getNumber(data.count.follow) }}
          </dd>
        </dl>
        <dl class="flex items-center gap-2 justify-between">
          <dt class="text-xs sm:text-lg">Product</dt>
          <dd class="font-bold text-xs sm:text-sm md:text-lg">
            {{ getNumber(data.count.product) }}
          </dd>
        </dl>

        <dl class="flex items-center gap-2 justify-between">
          <dt class="text-xs sm:text-lg">Since</dt>
          <dd class="font-bold text-xs sm:text-sm md:text-lg">
            {{ getDate(new Date()) }}
          </dd>
        </dl>

        <dl class="flex items-center gap-2 justify-between">
          <dt class="text-xs sm:text-lg">Response</dt>
          <dd class="font-bold text-xs sm:text-sm md:text-lg">
            {{ 232434 }}
          </dd>
        </dl>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps<{ profile: MarketClient }>()
const { data, pending } = await useFetch<{ count: IdStaticMarket }>(
  `/api/shop/market/:id/count`,
  {
    params: {
      id: props.profile.id,
    },
  }
)
// defineProps<{ data: ShopMarket["profile"] }>()
</script>
