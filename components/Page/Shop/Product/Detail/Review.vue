<template>
  <CardSide :class="' card-compact '" :bg="true">
    <figure>
      <img src="https://picsum.photos/300" :alt="data.id_user" />
    </figure>
    <CardBody :class="'w-4/5 '">
      <CardHead :title="data.id_user ?? ''">
        <ElRating :rating="3" />
      </CardHead>
      <p class="text-xs sm:text-sm line-clamp-2">{{ data.text }}</p>
      <CardActionEnd>
        <span class="text-xs sm:text-sm">{{ getDate(data.time) }}</span>
      </CardActionEnd>
    </CardBody>
  </CardSide>
</template>

<script lang="ts" setup>
import type { UserPreviewClient } from "~/types/product/item"
defineProps<{
  data: UserPreviewClient
}>()
</script>
