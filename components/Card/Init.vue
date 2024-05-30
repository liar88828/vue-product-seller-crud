<template>
  <Card :class="props.class" :bg="props.bg">
    <CardBody>
      <slot />
    </CardBody>
  </Card>
</template>

<script lang="ts" setup>
const props = defineProps({
  bg: { type: Boolean, default: true, required: false },

  class: {
    default: "",
    type: String,
    required: false,
  },
})
</script>
