<template>
  <div class="join">
    <input
      type="text"
      class="input input-bordered w-full input-sm join-item"
      placeholder="Search Name ...."
      v-model="store.name"
    />
    <ElIndicator :count="newMessage">
      <div class="join-item btn btn-outline btn-sm">
        <IconsBell class="icons" />
      </div>
    </ElIndicator>
  </div>
</template>

<script setup lang="ts">
import { useList } from "~/composables/message/useList"

const { store } = useList()

defineProps<{
  newMessage: number
}>()
</script>
