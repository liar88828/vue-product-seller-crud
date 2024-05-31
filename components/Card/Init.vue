<template>
  <Card :class="props.class" :bg="props.bg">
    <CardBody :class="props.class2">
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
  class2: {
    default: "",
    type: String,
    required: false,
  },
})
</script>
