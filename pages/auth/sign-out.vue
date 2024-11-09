<template>
  <Card :compact="false">
    <CardBody>
      <figure>
        <NuxtImg src="/img/login.svg" />
      </figure>
      <div class="flex items-center flex-col">
        <CardTitle :class="'text-center text-3xl'"
          >Welcome to ShopEase!</CardTitle
        >
        <h2 class="font-semibold text-lg my-5 text-center">
          Your Ultimate Online Shopping Destination
        </h2>
        <p class="text-center">
          At ShopEase, we bring you a seamless and enjoyable shopping
          experience. Explore a wide range of products, from the latest fashion
          trends to essential electronics, all at unbeatable prices.
        </p>
      </div>
      <div class="flex flex-col gap-2 mt-10">
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
  middleware: "auth",
})

// const img = useImage()
</script>
