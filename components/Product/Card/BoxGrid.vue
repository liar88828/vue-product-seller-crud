<template>
  <article
    class="hero rounded-lg"
    :style="`background-image: url(${data.image});`"
  >
    <div class="hero-overlay bg-opacity-45"></div>

    <div class="hero-content text-slate-300">
      <div class="flex">
        <div class="md:w-fit">
          <h2
            :class="`text-2xl font-bold ${data.color.dis ?? 'text-[#7fffd4]'}`"
          >
            {{ data.discount }}
          </h2>

          <h1 class="text-2xl sm:text-4xl md:text-5xl font-extrabold">
            {{ data.slogans }}
          </h1>
          <p class="text-sm sm:text-lg">{{ data.description }}</p>
          <div class="card-actions justify-end mt-2">
            <NuxtLink
              :to="data.link ? data.link : '/#'"
              class="btn sm:btn-md btn-sm"
              >Buy Now</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import type { DataBoxProps } from "~/types/product/grid"

const { data } = defineProps<{ data: DataBoxProps }>()
</script>
