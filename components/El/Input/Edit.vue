<template>
  <div class="join">
    <input
      v-model="title"
      :placeholder="place"
      class="input input-bordered join-item w-full"
    />
    <button @click="handler" :class="`btn join-item ${btn}`">
      <slot />
    </button>
  </div>
</template>

<script setup lang="ts">
const title = defineModel("title", { required: true })

defineProps<{
  handler: (i?: any) => void
  btn?: string
  place: string
}>()
</script>
