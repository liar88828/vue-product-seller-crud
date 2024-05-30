<script lang="ts" setup>
defineProps({
  hander: Function,
  styles: {
    type: String,
    required: false,
    default: "",
  },
})
</script>
<template>
  <button :class="`btn btn-outline ${styles}`">
    <IconsTrash />
  </button>
</template>
