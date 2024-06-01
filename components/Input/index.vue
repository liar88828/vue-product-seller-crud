<template>
  <label class="form-control w-full">
    <div class="label">
      <span class="label-text font-bold">{{ title }}</span>
    </div>
    <input
      :type="types"
      placeholder="Type here"
      class="input input-bordered w-full"
      v-model="state"
    />
  </label>
</template>

<script setup lang="ts">
import type { InputTypeHTMLAttribute } from "vue"

defineProps<{ title: string; types: InputTypeHTMLAttribute }>()

const state = defineModel("input", { required: true })
</script>
