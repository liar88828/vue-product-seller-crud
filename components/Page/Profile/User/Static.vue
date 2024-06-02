<template>
  <CardInit>
    <div
      class="flex items-center flex-col justify-between sm:items-start sm:flex-row"
    >
      <article
        class="flex items-center flex-col justify-center sm:justify-between"
      >
        <div :class="props.class">
          <component
            :is="icon"
            class="inline-block w-8 h-8 sm:w-10 sm:h-10 stroke-current"
          />
          <!-- <IconsBook class="inline-block w-8 h-8 stroke-current" /> -->
        </div>

        <div class="card-title text-sm sm:text-md font-bold">
          {{ data.title }}
        </div>
      </article>

      <!--  -->
      <article
        class="flex flex-col items-center justify-between sm:flex-col sm:items-end h-full"
      >
        <div :class="`font-semibold text-lg sm:text-2xl ${props.class} `">
          {{ getNumber(data.total, "compact") }}
        </div>

        <div class="card-desc text-xs sm:text-md sm:text-end">
          <span v-if="isTask"> {{ getNumber(data.task) }} tasks </span>
          <span v-else> {{ getPercent(data.percent) }} more than </span>
          <br />
        </div>
      </article>
    </div>
    <!--  -->
    <span class="border-t-2 border-slate-300 text-xs sm:text-md">
      Remaining - {{ getDate(data.day,'medium') }}
    </span>
  </CardInit>
</template>

<script lang="ts" setup>
import type { Component } from "vue"
import type { ProfileStatic } from "~/types/user/static"

const props = defineProps<{
  data: ProfileStatic
  icon: Component
  class: string
  isTask?: boolean
}>()
// const data: ProfileStatic = {
//   title: "Tasks done",
//   percent: 86,
//   day: new Date(),
//   task: 31,
// }
</script>
