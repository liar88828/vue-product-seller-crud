<template>
  <div class="flex gap-2 p-1 items-center">
    <button class="btn btn-square btn-xs" @click="() => counter++">+</button>
    <span class="">{{ counter }}</span>
    <button class="btn btn-square btn-xs" @click="() => counter--">-</button>
  </div>
</template>

<script setup lang="ts">
const counter = defineModel<number>("counter", { required: true })
</script>
