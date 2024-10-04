<template>
  <!-- <ElError v-else-if="error || !data" /> -->
  <ElDropDownIconNew index="1">
    <NuxtLink href="/user/trolley" v-if="loggedIn">
      <IconsTrolley class="icons" />
    </NuxtLink>
    <NuxtLink href="#" v-else>
      <IconsUser class="icons" />
    </NuxtLink>
  </ElDropDownIconNew>
</template>

<script setup lang="ts">
defineProps<{ loggedIn: boolean }>()
// console.log(data, "data trolley")
// console.log(error.value?.message, "message error")
</script>
