<template>
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <ElDropDownIconNew v-else index="1" :indicator="data?.trolly.toString()">
    <IconsTrolley class="icons" v-if="loggedIn" />
    <IconsUser class="icons" v-else />
  </ElDropDownIconNew>
</template>

<script setup lang="ts">
defineProps<{ loggedIn: boolean }>()

const { data, pending, error } = await useFetch("/api/user/trolly/notify", {
  key: "trolly_notify",
})
// console.log(data)
</script>
