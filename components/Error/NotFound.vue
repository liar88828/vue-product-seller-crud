<template>
  <!-- <section class="card">
    <div class="card-body">
      <h1 class="card-title">Data Is Not Found</h1>
    </div>
  </section> -->

  <Card>
    <CardBody>
      <CardTitle>{{ title }}</CardTitle>
      <p>{{ description }}</p>
      <CardAction class="flex justify-end">
        <NuxtLink :href="link" class="btn btn-sm">{{ linkTitle }}</NuxtLink>
      </CardAction>
    </CardBody>
  </Card>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: "Data Is Not Found",
    required: false,
  },
  description: {
    type: String,
    required: false,
    default: "Maybe server is busy",
  },
  code: {
    type: Number,
    default: 0,
    required: false,
  },
  linkTitle: {
    type: String,
    default: "Back",
    required: false,
  },
  link: {
    type: String,
    default: "/",
    required: false,
  },
})
</script>
