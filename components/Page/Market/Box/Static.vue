<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-1">
    <dl class="flex items-center gap-2 justify-between">
      <dt class="text-xs sm:text-lg">Follow</dt>
      <dd class="font-bold text-xs sm:text-sm md:text-lg">
        {{ getNumber(static.follow) }}
      </dd>
    </dl>
    <dl class="flex items-center gap-2 justify-between">
      <dt class="text-xs sm:text-lg">Product</dt>
      <dd class="font-bold text-xs sm:text-sm md:text-lg">
        {{ getNumber(static.product) }}
      </dd>
    </dl>

    <dl class="flex items-center gap-2 justify-between">
      <dt class="text-xs sm:text-lg">Since</dt>
      <dd class="font-bold text-xs sm:text-sm md:text-lg">
        {{ static.since }}
      </dd>
    </dl>

    <dl class="flex items-center gap-2 justify-between">
      <dt class="text-xs sm:text-lg">Response</dt>
      <dd class="font-bold text-xs sm:text-sm md:text-lg">
        {{ static.response }}
      </dd>
    </dl>
  </div>
</template>
<script lang="ts" setup>
import type { MarketStatic } from "~/types/profile/profile"

defineProps<{
  static: MarketStatic
}>()
</script>
