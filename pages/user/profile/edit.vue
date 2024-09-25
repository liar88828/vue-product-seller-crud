<template>
  <PageProfileEditUser :data="userProfile" />
</template>
<script lang="ts" setup>
definePageMeta({
  layout: "user",
})
import { userProfile } from "~/assets/example/user/dataUser"
</script>
