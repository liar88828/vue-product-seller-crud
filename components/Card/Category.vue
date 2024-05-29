<template>
  <Card>
    <CardBodyCenter :class="' w-20 sm:w-30 md:w-40 '">
      <NuxtLink :to="data.link" class="flex items-center flex-col gap-2">
        <component :is="data.icon" class="h-10 w-10" />
        <CardHeadTitle :title="data.title" 
        :class="'text-xs md:text-sm lg:text-md' "
        />
      </NuxtLink>
    </CardBodyCenter>
  </Card>
</template>
<script lang="ts" setup>
import type { ItemIcons } from "~/types/globals/icon"

defineProps<{ data: ItemIcons }>()
</script>
