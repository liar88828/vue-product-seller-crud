<template>
  <NuxtLayout name="profile">
    <PageUserProfile :data="data" />
  </NuxtLayout>
</template>
<script lang="ts" setup>
import { userProfile } from "~/assets/example/dataUser"

const data = userProfile
</script>
