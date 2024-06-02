<script lang="ts" setup>
import type { StaticLink } from "~/types/globals/StaticLink"

const props = defineProps<{ data: StaticLink, class?: string }>()
// const getData = ref("")
const select = defineModel("select", { required: true })
</script>

<template>
  <div class="join border">
    <label class="flex items-center gap-2 join-item">
      <component :is="props.data.icon" class="w-5 h-5 mx-1" />
      <select
        :class="`${
          props.class ? props.class : ' w-14 '
        } join-item select-rm p-2 px-2`"
        v-model="select"
      >
        <option selected>{{ props.data.title }}</option>
        <option v-for="d in props.data.list" :key="d.title">
          {{ d.title }}
        </option>
      </select>
    </label>
  </div>
</template>
