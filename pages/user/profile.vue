<template>
  <NuxtLayout name="profile">
    <ProfileUser :data="userProfile" />
  </NuxtLayout>
</template>
<script lang="ts" setup>
import { userProfile } from '~/assets/example/dataUser'
</script>
