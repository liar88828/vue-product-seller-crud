<template>
  <CardParentSide :title="'Trolley'" :right="Trash">
    <ElError v-if="!data" text="error" />
    <Item v-else v-for="item in data" :data="item" :key="item?.id" />
    <Total :data="data" />
  </CardParentSide>
</template>

<script lang="ts" setup>
import Total from "./Total.vue"
import Trash from "~/components/Icons/Trash.vue"
import Item from "./Item.vue"

defineProps<{ data: NewTolleyProps[] }>()
</script>
