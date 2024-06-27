<template>
  <NuxtLayout name="user">
    <PageProfileEditUser :data="userProfile" />
  </NuxtLayout>
</template>
<script lang="ts" setup>
import { userProfile } from "~/assets/example/user/dataUser"
</script>
