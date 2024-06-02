<template>
  <!-- :class="data.class" -->
  <div>
    <div class="indicator">
      <span v-if="data.read" class="indicator-item badge badge-primary">
        <!-- {{ data.count }} -->
      </span>
      <div v-if="data.title" class="badge badge-outline">
        {{ data.title }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { NotifyProps } from "~/types/globals/notify"
const { data } = defineProps<{ data: NotifyProps }>()
</script>
