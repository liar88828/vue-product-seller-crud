<template>
  <div class="flex justify-between">
    <div class="">
      <h1 class="title-md font-bold">Order History</h1>
    </div>

    <div class="flex flex-wrap gap-1 justify-end">
      <ul
        class="menu menu-xs menu-horizontal bg-base-100 rounded shadow w-full flex justify-between"
      >
        <EleMenuDrop :data="staticLink.sort" />
        <EleMenuDrop :data="staticLink.status" />
      </ul>
    </div>
  </div>
</template>

<script setup>
import { staticLink } from '~/assets/link/shopLink'


defineProps({
  market: {
    type: Boolean,
    default: false,
    required: false,
  },
})
</script>
