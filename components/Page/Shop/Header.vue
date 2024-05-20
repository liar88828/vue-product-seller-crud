<template>
  <header
    class="flex items-center justify-between px-4 md:px-6 h-14 border-b bg-gray-100/40 dark:bg-gray-800/40"
  >
    <a class="flex items-center gap-2" href="#">
      <IconsHandLove />
      <span class="font-semibold text-lg">Acme Store</span>
    </a>
    <div class="relative flex-1 max-w-md">
      <IconsSearch />
      <input
        class="flex h-10 border border-input px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-white shadow-none appearance-none pl-10 pr-8 py-2 rounded-md dark:bg-gray-950"
        placeholder="Search products..."
        type="search"
      />
    </div>
    <button
      class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
    >
      <IconsTrolley />

      <span class="sr-only">Cart</span>
    </button>
  </header>
</template>
