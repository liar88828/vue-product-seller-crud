<template>
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <PageProfileEdit v-else :data="data.user" :onEdit="editUser" />
</template>
<script lang="ts" setup>
definePageMeta({
  layout: "user",
})

const { getUserId, editUser } = useUser()
const { data, pending, error } = await getUserId()
</script>
