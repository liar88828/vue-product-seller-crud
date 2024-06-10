<script lang="ts" setup>
import type { TypeMessage } from "~/types/message/notify"
const data: TypeMessage[] = [
  "Admin",
  "Confirm",
  "Message",
  "Transaction",
  "User",
  "Select",
]

const select = defineModel("select", { required: true })
</script>

<template>
  <select class="select select-bordered select-sm" v-model="select">
    <option v-for="d in data" :key="d">
      {{ d }}
    </option>
  </select>
</template>
