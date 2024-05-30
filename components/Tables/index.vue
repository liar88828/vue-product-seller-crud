<template>
  <div class="overflow-x-auto">
    <table
      :class="`table table-zebra table-xs table-auto ${props.class} ${
        bg ? bg : ' bg-base-100 '
      }`"
    >
      <slot />
    </table>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  class: { type: String, default: "", required: false },
  bg: { type: String, default: "", required: false },
})
</script>
