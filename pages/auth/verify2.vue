<template>
  <Card :compact="false">
    <CardBody>
      <div class="flex items-center justify-center">
        <NuxtImg src="/img/shopease-white.png" class="w-16 h-1w-16" />
        <h1 class="card-title">ShopEase</h1>
      </div>

      <div class="flex items-center flex-col">
        <CardTitle :class="'text-center text-2xl'">Verify Your Email</CardTitle>
        <p class="text-center">
          Please enter the code on just sent to your email
        </p>
      </div>

      <div class="flex flex-col gap-2 mt-4">
        <NuxtLink to="/auth/sign-up" class="btn btn-primary btn-outline"
          >Continue</NuxtLink
        >
        <NuxtLink to="/auth/sign-in" class="btn btn-primary">Sign In</NuxtLink>
      </div>
    </CardBody>
  </Card>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "auth",
})
</script>
