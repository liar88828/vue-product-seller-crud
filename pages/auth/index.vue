<template>
  <Card :compact="false">
    <CardBody>
      <PageAuthBack :back="false" />

      <!-- <div class="flex items-center justify-center">
        <NuxtImg
          src="/img/shopease-white.png"
          class="w-16 h-16 lg:w-32 lg:h-32"
        />
        <h1 class="card-title lg:text-3xl">ShopEase</h1>
      </div> -->

      <div class="lg:flex lg:gap-20 mt-5">
        <!--  -->
        <figure class="lg:w-1/2">
          <NuxtImg src="/img/login.svg" />
        </figure>
        <!--  -->
        <div class="lg:w-1/2 mt-5">
          <div class="flex items-center flex-col">
            <h1 class="auth-p">Welcome to ShopEase!</h1>
            <h2 class="auth-h2">Your Ultimate Online Shopping Destination</h2>
            <p class="text-center lg:text-lg">
              At ShopEase, we bring you a seamless and enjoyable shopping
              experience.
              <span class="hidden md:line-clamp-2 lg:line-clamp-4">
                Explore a wide range of products, from the latest fashion trends
                to essential electronics, all at unbeatable prices. Our
                user-friendly platform ensures you can easily find what you're
                looking for, with convenient features designed to make your
                shopping journey smooth and hassle-free.
              </span>
            </p>
          </div>
          <div class="flex flex-col gap-2 mt-4 lg:w-1/2 lg:flex-row lg:mt-16">
            <NuxtLink
              to="/auth/sign-up"
              class="btn btn-primary btn-outline lg:w-full lg:btn-lg"
              >Continue</NuxtLink
            >
            <NuxtLink
              to="/auth/sign-in"
              class="btn btn-primary lg:w-full lg:btn-lg"
              >Sign In</NuxtLink
            >
          </div>
        </div>
      </div>
    </CardBody>
  </Card>
</template>

<script lang="ts" setup>
// function enableCustomLayout() {
//   setPageLayout("auth")
// }
definePageMeta({
  layout: "auth",
})
</script>
