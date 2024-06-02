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
        <Indicator :count="29">
          <div class="join-item btn btn-outline btn-sm">
            <IconsBell class="icons" />
          </div>
        </Indicator>
        <!-- <div class="indicator">
          <span class="indicator-item badge badge-primary ">232</span>
        
        </div> -->
      </div>
    </template>
    <CardMessage
      v-for="dataList in data"
      :data="dataList"
      :key="dataList.name"
    />
  </CardParent>
</template>

<script lang="ts" setup>
import type { MessageListProps } from "~/types/globals/message"
import UnRead from "./UnRead.vue"
defineProps<{
  data: MessageListProps[]
  newMessage: number
}>()
</script>
