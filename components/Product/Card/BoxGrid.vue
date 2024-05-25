<template>
  <article
    class="hero rounded-lg"
    :style="`background-image: url(${data.image});`"
  >
    <div class="hero-overlay bg-opacity"></div>

    <div class="hero-content">
      <div class="flex">
        <div class="w-96 sm:w-fit">
          <h2 :class="` text-2xl font-bold ${data.color.dis} `">
            {{ data.discount }}
          </h2>

          <h1 class="text-2xl sm:text-4xl md:text-5xl font-extrabold">
            {{ data.slogans }}
          </h1>
          <p class="text-sm sm:text-lg">{{ data.description }}</p>
          <div class="card-actions justify-end mt-2">
            <NuxtLink
              :to="data.link ? data.link : '/#'"
              class="btn btn-outline sm:btn-md btn-sm"
              >Buy Now</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import type { DataBoxProps } from "~/types/grid"

const { data } = defineProps<{ data: DataBoxProps }>()
</script>
