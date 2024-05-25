<template>
  <div class="flex justify-between">
    <h1 class="text-2xl font-bold">Order History</h1>
    <button></button>
    <div class="space-x-2">
      <select class="select select-bordered select-sm">
        <option disabled selected>Stock?</option>
        <option>Low</option>
        <option>High</option>
      </select>

      <select class="select select-bordered select-sm">
        <option disabled selected>Status</option>
        <option>Waiting</option>
        <option>Processing</option>
        <option>Delivered</option>
        <option>Cancelled</option>
      </select>
    </div>
  </div>
</template>

<script setup>
defineProps({
  market: {
    type: Boolean,
    default: false,
    required: false,
  },
})
</script>
