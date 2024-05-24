<script setup lang="ts"></script>

<template>
  <section class="min-h-screen bg-base-300 w-screen">
    <MainNavigator :class="{ hidden: $route.path.includes('shop') }" />
    <MainPageShopHeader :class="{ hidden: !$route.path.includes('shop') }" />
    <div class="flex">
      <Sidebar />
      <main class="container mx-auto mt-2 pb-20">
        <!-- <Breadcrumbs /> -->
        <slot />
        <MainBottomNavigator />
      </main>
    </div>
  </section>
</template>
