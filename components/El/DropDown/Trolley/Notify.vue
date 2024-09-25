<template>
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <ElDropDownIconNew index="1" :indicator="data?.notify ?? 0">
    <IconsTrolley class="icons" v-if="loggedIn" />
    <IconsUser class="icons" v-else />
  </ElDropDownIconNew>
</template>

<script setup lang="ts">
defineProps<{ loggedIn: boolean }>()

const { data, pending, error } = await useFetch("/api/user/trolley/notify", {
  key: "trolley_notify",
})
console.log(data, "data trolley")
console.log(error.value?.message, "message error")
</script>
