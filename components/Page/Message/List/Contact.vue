<template>
  <CardSide>
    <figure class="w-1/4">
      <img
        :src="data.img"
        :alt="data.name"
        class="rounded-xl object-cover w-full aspect-square shadow-lg"
      />
    </figure>
    <CardBody :class="'w-3/4'">
      <CardHead :title="data.name">
        <UnRead :read="data.read" />
      </CardHead>
      <CardActionBetween class="flex-nowrap">
        <div class="">
          <p class="text-xs sm:text-sm">{{ getTextSplit(data.msg, 40) }}</p>
          <span class="text-xs sm:text-sm">{{ getDate(data.time) }}</span>
        </div>
        <NuxtLink
          :to="`/message/${data.id}`"
          class="btn btn-outline btn-sm self-end"
          >Reply</NuxtLink
        >
      </CardActionBetween>
    </CardBody>
  </CardSide>
</template>

<script lang="ts" setup>
import type { MessageContact } from "~/types/message/message"

defineProps<{
  data: MessageContact
}>()
</script>
