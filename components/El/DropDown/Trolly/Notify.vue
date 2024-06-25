<template>
  <ElLoading v-if="pending" />
  <!-- @vue-expect-error -->
  <ElDropDownIconNew index="1" :indicator="data?.trolly">
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
