<template>
  <section class="navbar bg-base-100 shadow h-16 px-6">
    <div class="flex-1 gap-2 items-center">
      <NuxtLink href="/" class="hidden sm:block">
        <NuxtImg src="/img/logo_white.png" width="46" height="46" />
      </NuxtLink>
    </div>

    <div class="flex-none">
      <ElDropDownSetting />
      <ElTheme />
    </div>
  </section>
</template>
