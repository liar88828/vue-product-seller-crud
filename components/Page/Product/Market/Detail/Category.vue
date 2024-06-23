<template>
  <Card>
    <CardBodyCenter class="w-20 sm:w-40 ">
      <h3 class="card-title justify-center">
        <component :is="data.icon" class="h-10 w-10" />
      </h3>
      <CardActionCenter>
        <NuxtLink :to="data.link"> {{ data.title }} </NuxtLink>
      </CardActionCenter>
    </CardBodyCenter>
  </Card>
</template>
<script lang="ts" setup>
import type { ItemIcons } from "~/types/globals/icon"

defineProps<{ data: ItemIcons }>()
</script>
