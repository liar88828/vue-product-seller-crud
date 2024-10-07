<template>
  <div class="join w-full">
    <input
      type="text"
      class="input input-bordered w-full input-sm join-item"
      placeholder="Search Name ...."
      v-model="store.name"
    />
    <div class="indicator">
      <span class="indicator-item badge badge-primary mr-6">{{
        newMessage
      }}</span>
      <div class="join-item btn btn-sm">
        <IconsBell class="icons" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { store } = useMessage()
defineProps<{
  newMessage: number
}>()
</script>
