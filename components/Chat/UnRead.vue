<template>
  <div :class="props.class">
    <div class="indicator">
      <span v-if="props.read" class="indicator-item badge badge-primary">{{
        props.count
      }}</span>
      <div v-if="props.title" class="badge badge-outline">
        {{ props.title }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { NotifyProps } from "~/types/globals/notify"
const props = defineProps<NotifyProps>()
</script>
