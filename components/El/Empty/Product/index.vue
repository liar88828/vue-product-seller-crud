<template>
  <div
    class="flex flex-col items-center justify-center min-h-[50dvh] bg-background px-4 md:px-6"
  >
    <div class="max-w-xl w-full">
      <div class="flex justify-center items-center">
        <IconsBox class="w-24 h-24" />
      </div>
      <div class="mt-8 space-y-4 text-center">
        <h1 class="text-3xl font-bold">Product is Out of Stock</h1>
        <p class="text-muted-foreground">
          maybe you can see other products in our store later, or you can call
          the market
        </p>
        <div class="flex items-center justify-center">
          <p class="text-2xl font-bold text-primary">Out of Stock</p>
        </div>
        <NuxtLink class="btn btn-primary">Notify Me When Available</NuxtLink>
      </div>
    </div>
  </div>
</template>
