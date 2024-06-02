<script lang="ts" setup>
import type { StaticLink } from "~/types/globals/StaticLink"

const props = defineProps<{ data: StaticLink; open?: boolean }>()
</script>

<template>
  <li>
    <details :open="props.open">
      <summary>
        <component :is="data.icon" class="h-5 w-5" />
        <span> {{ data.title }}</span>
      </summary>
      <ul class="bg-base-100 shadow">
        <li v-for="d in props.data.list" :key="d.title">
          <a>{{ d.title }}</a>
        </li>
      </ul>
    </details>
  </li>
</template>
