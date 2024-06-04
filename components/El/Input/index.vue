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
  <span class="text-red-500 text-xs" v-if="err">{{ err[0] }}</span>
  <!-- {{ err }} -->
</template>

<script setup lang="ts">
import type { InputTypeHTMLAttribute } from "vue"

defineProps<{ title: string; types: InputTypeHTMLAttribute; err?: string }>()

const state = defineModel("input", { required: true })
// const err = defineModel("error", { required: false })
</script>
