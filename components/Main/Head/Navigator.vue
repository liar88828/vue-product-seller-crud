<template>
  <section class="navbar bg-base-100 shadow">
    <div class="navbar-start">
      <NuxtLink class="btn btn-ghost text" to="/">daisyUI</NuxtLink>
    </div>

    <div class="navbar-end">
      <DropDownSetting />
      <!-- <DropDownTrolly />
      <DropDownNotify /> -->
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import type { Item } from "~/types/globals/LinkItem"
const linkMenu = ref<{ server: Item[]; client: Item[] }>({
  server: [
    // {
    //   href: "/use-fetch",
    //   title: "Use Fetch",
    // },
    // {
    //   href: "/use-fetch-lazy",
    //   title: "Use Fetch Lazy",
    // },
    // {
    //   href: "/use-fetch-async",
    //   title: "Use Fetch Async",
    // },
    // {
    //   href: "/use-fetch-lazy-async",
    //   title: "Use Fetch Lazy Async",
    // },
  ],
  client: [
    {
      link: "/",
      title: "Sign In",
    },
    {
      link: "/user",
      title: "Sign Up",
    },
    {
      link: "/user",
      title: "Sign Out",
    },
    // {
    //   href: "/custom",
    //   title: "Custom",
    // },
    // {
    //   href: "/icon",
    //   title: "Icon",
    // },
    // {
    //   href: "/composable",
    //   title: "Composable",
    // },
    // {
    //   href: "/plugin",
    //   title: "Plugin",
    // },
    // {
    //   href: "/login",
    //   title: "Login",
    // },
    // {
    //   href: "/content-page",
    //   title: "Content",
    // },
    // {
    //   href: "/counter",
    //   title: "Counter",
    // },
    // {
    //   href: "/pinia",
    //   title: "Pinia",
    // },
    // {
    //   href: "/fetch-server",
    //   title: "FetchServer",
    // },
  ],
})
</script>
