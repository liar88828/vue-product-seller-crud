<template>
  <section class="min-h-screen bg-base-300 w-screen">
    <Navigator />
    <div class="flex">
      <Sidebar />
      <main class="container mx-auto mt-2">
        <Breadcrumbs />
        <slot />
        <BottomNavigator />
      </main>
    </div>
  </section>
</template>
