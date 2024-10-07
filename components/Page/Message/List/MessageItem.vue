<template>
  <div :class="'rounded-lg shadow flex bg-base-100'">
    <figure class="w-1/3">
      <img
        :src="data.img"
        :alt="data.name"
        class="rounded-lg object-cover w-full h-auto aspect-square shadow-lg"
      />
    </figure>
    <div :class="'w-full p-2'">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-1">
          <h1 class="text-md font-bold">{{ data.name }}</h1>
          <p class="badge badge-primary badge-sm sm:badge-md">
            {{ data.type }}
          </p>
        </div>
        <NuxtLink
          :to="`/message/${data.id}`"
          class="btn btn-outline btn-xs self-end"
        >
          Reply
        </NuxtLink>
      </div>
      <CardActionBetween class="flex-nowrap">
        <div class="flex justify-between flex-col">
          <p class="text-xs sm:text-sm">
            <button class="text-xs sm:text-sm" @click="showText = !showText">
              {{ showText ? getTextSplit(props.data.msg, 25) : props.data.msg }}
            </button>
          </p>
          <span class="text-xs sm:text-sm">{{ getDate(data.time) }}</span>
        </div>
      </CardActionBetween>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  data: MessageListClient
}>()

const showText = ref(true)
</script>
