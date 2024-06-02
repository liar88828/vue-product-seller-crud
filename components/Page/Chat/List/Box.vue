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
        <!-- <UnRead :data="data" /> -->
        <template #title>
          <p class="badge badge-primary badge-sm sm:badge-md">
            {{ data.type }}
          </p>
        </template>
      </CardHead>
      <CardActionBetween class="flex-nowrap">
        <div class="flex justify-between flex-col">
          <p class="text-xs sm:text-sm">
            <button class="text-xs sm:text-sm" @click="showText = !showText">
              {{ showText ? getTextSplit(props.data.msg, 25) : props.data.msg }}
            </button>
          </p>

          <span class="text-xs sm:text-sm">{{ getDate(data.time) }}</span>
        </div>
        <NuxtLink :to="data.link" class="btn btn-outline btn-sm self-end"
          >Reply</NuxtLink
        >
      </CardActionBetween>
    </CardBody>
  </CardSide>
</template>

<script lang="ts" setup>
import type { NotifyMessage } from "~/types/globals/notify"
const props = defineProps<{
  data: NotifyMessage
}>()

const showText = ref(true)
// const text = computed(() =>
//   showText ? getTextSplit(props.data.msg, 25) : props.data.msg
// )
</script>
