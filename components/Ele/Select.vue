<script lang="ts" setup>
import type { StaticLink } from "~/types/globals/StaticLink"

const props = defineProps<{ data: StaticLink }>()
// const getData = ref("")
const select = defineModel("select", { required: true })
</script>

<template>
  <select class="select select-bordered select-sm" v-model="select">
    <option disabled selected>{{ props.data.title }}</option>
    <option v-for="d in props.data.list" :key="d.title">
      {{ d.title }}
    </option>
    <option></option>
  </select>
</template>
