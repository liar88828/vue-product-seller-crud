<template>
  <div
    class="flex flex-col items-center justify-center min-h-[100dvh] bg-background px-4 md:px-6"
  >
    <div class="max-w-xl w-full">
      <img
        src="https://picsum.photos/200"
        alt="Product Image"
        width="600"
        height="600"
        class="rounded-lg w-full aspect-square object-cover"
      />
      <div class="mt-8 space-y-4">
        <h1 class="text-3xl font-bold">Acme Prism T-Shirt</h1>
        <p class="text-muted-foreground">
          A cozy and stylish t-shirt featuring a unique prism-inspired design.
        </p>
        <div class="flex items-center justify-center">
          <p class="text-2xl font-bold text-primary">Out of Stock</p>
        </div>
        <div class="flex justify-center">
          <Button variant="outline">Notify Me When Available</Button>
        </div>
      </div>
    </div>
  </div>
</template>
