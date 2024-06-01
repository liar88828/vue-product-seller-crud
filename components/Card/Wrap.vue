<template>
  <Card :class="props.class" :bg="props.bg">
    <CardBody :class="props.class2">
      <CardHead :title="props.title" :class="props.class3">
        <slot name="title"></slot>
      </CardHead>
      <slot />
    </CardBody>
  </Card>
</template>

<script lang="ts" setup>
const props = defineProps({
  bg: { type: Boolean, default: true, required: false },
  title: {
    type: String,
    default: "",
    required: false,
  },
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
  class3: {
    default: "",
    type: String,
    required: false,
  },
})
</script>
