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
    <div v-if="err">
      <span class="text-red-500 text-xs" v-for="msg in err">
        {{ msg }}
      </span>
    </div>
  </label>
</template>

<script setup lang="ts">
defineProps<{ title: string; err?: string[] }>()

const state = defineModel("textarea", { required: true })
</script>
