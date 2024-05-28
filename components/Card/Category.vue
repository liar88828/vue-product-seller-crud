<template>
  <Card>
    <CardBodyCenter :class="' w-20 sm:w-30 md:w-40 '">
      <CardHeadCenter>
        <component :is="data.icon" class="h-10 w-10" />
      </CardHeadCenter>
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
