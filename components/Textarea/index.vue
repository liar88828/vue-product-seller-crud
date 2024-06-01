<template>
  <label class="form-control w-full">
    <div class="label">
      <span class="label-text font-bold">{{ title }}</span>
    </div>
    <!-- @vue-ignore -->
    <textarea
      placeholder="Type here"
      class="textarea textarea-bordered w-full"
      v-model="state"
    >
  {{ state }}
    
    </textarea>
    <!-- v-model="state" -->
  </label>
</template>

<script setup lang="ts">
defineProps<{ title: string }>()

const state = defineModel("textarea", { required: true })
</script>
