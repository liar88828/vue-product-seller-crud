<template>
  <NuxtLayout name="profile">
    <PageProfileUser :data="userProfile" />
  </NuxtLayout>
</template>
<script lang="ts" setup>
import { userProfile } from "~/assets/example/user/dataUser"
</script>
