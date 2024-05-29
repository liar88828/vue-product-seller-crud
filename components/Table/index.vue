<template>
  <div class="overflow-x-auto">
    <table
      :class="`table table-zebra table-xs table-auto bg-base-100 ${props.class}`"
    >
      <slot />
    </table>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ class?: string }>()
</script>
