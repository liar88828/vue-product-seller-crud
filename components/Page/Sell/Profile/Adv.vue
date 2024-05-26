<template>
  <article
    :class="`hero rounded-lg `"
    :style="`background-image: url(${data.image});`"
  >
    <pre class="hero-overlay bg-opacity-45"></pre>
    <div class="hero-content">
      <div class="flex">
        <div>
          <h1
            class="sm:text-4xl md:text-5xl text-3xl font-bold md:text-center text-left"
          >
            {{ data.title }}
          </h1>
          <p class="py-4 text-1xl sm:text-2xl md:text-3xl font-semibold">
            {{ data.slogans }}
          </p>
          <div class="flex items-center justify-between">
            <ul class='sm:text-lg text-md'>
              <li v-for="d in data.description">- {{ d }}</li>
            </ul>
            <NuxtLink :to="data.link" class="btn btn-outline sm:btn-md btn-sm"
              >Learn</NuxtLink
            >
          </div>
        </div>
        <!-- <div class="flex items-end">
          <NuxtLink :to="data.link" class="btn btn-outline sm:btn-md btn-sm"
            >Learn</NuxtLink
          >
        </div> -->
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import type { AdvProps } from "~/types/grid"

const { data } = defineProps<{ data: AdvProps }>()
</script>
