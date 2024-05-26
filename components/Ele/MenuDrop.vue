<script lang="ts" setup>
import type { StaticLink } from "~/types/global/StaticLink"

const { data } = defineProps<{ data: StaticLink }>()
</script>

<template>
  <li>
    <details>
      <summary>
        <component :is="data.icon" class="h-5 w-5" />
        <span> {{ data.title }}</span>
      </summary>
      <ul class="bg-base-300">
        <li v-for="d in data.list" :key="d.title">
          <a>{{ d.title }}</a>
        </li>
      </ul>
    </details>
  </li>
</template>
