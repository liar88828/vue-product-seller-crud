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
  <div v-if="err">
    <span class="text-red-500 text-xs" v-for="msg in err">
      {{ msg }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { InputTypeHTMLAttribute } from "vue"

defineProps<{ title: string; types: InputTypeHTMLAttribute; err?: string[] }>()

const state = defineModel("input", { required: true })
// const err = defineModel("error", { required: false })
</script>
