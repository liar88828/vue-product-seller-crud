<template>
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <ErrorNotFound
    v-else-if="data.likes.length === 0"
    :title="'The Data Like is Empty'"
    :description="'Please product in shop '"
    :code="404"
    :linkTitle="'Go Shop'"
    :link="`/shop`"
  />
  <PageLike v-else :data="data.likes" />
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "user",
})
const { data, pending, error } = await useLike().findAll()
</script>
