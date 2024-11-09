<template>
  <Card :bg="false" :class="`bg-base-100/90`">
    <CardBody>
      <UserStatic />
      <!--  -->
      <Info />
    </CardBody>
  </Card>
</template>

<script lang="ts" setup>
import UserStatic from "./UserStatic.vue"
import Info from "./Info.vue"
import type { User } from "@prisma/client"
defineProps<{ data: UserPublic }>()
</script>
