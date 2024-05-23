<template>
  <section class="min-h-screen bg-base-300 w-screen">
    <Navigator :class="{ hidden: $route.path.includes('shop') }" />
    <PageShopHeader :class="{ hidden: !$route.path.includes('shop') }" />
    <div class="flex">
      <Sidebar />
      <main class="container mx-auto mt-2 pb-20">
        <!-- <Breadcrumbs /> -->
        <slot />
        <BottomNavigator />
      </main>
    </div>
  </section>
</template>
