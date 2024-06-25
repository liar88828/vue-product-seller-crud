<template>
  <section class="navbar bg-base-100 shadow h-16 px-6">
    <div class="flex-1 gap-2 items-center jus">
      <NuxtLink href="/" class="hidden sm:block">
        <NuxtImg src="/img/logo_white.png" width="46" height="46" />
      </NuxtLink>
      <Search />
    </div>
    <div class="flex-none ">
      <div v-if="loggedIn">
        <ElDropDownTrolly />
        <!-- <ElTheme /> -->
      </div>
      <Auths v-else />
    </div>
  </section>
</template>
<script lang="ts" setup>
import Auths from "./Auths.vue"
import Search from "./Search.vue"
const { loggedIn } = useUserSession()
</script>
