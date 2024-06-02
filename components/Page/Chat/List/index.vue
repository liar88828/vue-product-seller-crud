<!-- Main Chat List -->
<template>
  <!-- :right="UnRead" -->
  <CardParent :title="'Message'">
    <template #rightSlot>
      <div class="join">
        <input
          type="text"
          class="input input-bordered w-full input-sm join-item"
          placeholder="Search Name ...."
        />
        <ElIndicator :count="newMessage">
          <div class="join-item btn btn-outline btn-sm">
            <IconsBell class="icons" />
          </div>
        </ElIndicator>
      </div>
    </template>
    <Box v-for="dataList in props.data" :data="dataList" :key="dataList.name" />
  </CardParent>
</template>

<script lang="ts" setup>
import type { NotifyMessage } from "~/types/globals/notify"
import Box from "./Box.vue"
const props = defineProps<{
  data: NotifyMessage[]
  newMessage: number
}>()
</script>
