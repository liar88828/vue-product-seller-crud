<template>
  <div class="indicator">
    <slot />
    <span class="badge badge-xs sm:badge-sm indicator-item badge-primary mr-1">
      <p>{{ pending ? 0 : data?.notify }}</p>
    </span>
  </div>
</template>

<script lang="ts" setup>
const { data, pending } = await useTrolley().notifyTrolley()
</script>
