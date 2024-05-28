<template>
  <Card :class="props.class">
    <CardBody>
      <slot />
    </CardBody>
  </Card>
</template>

<script lang="ts" setup>
const props = defineProps({
  class: {
    default: "",
    type: String,
    required: false,
  },
})
</script>
