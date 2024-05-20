<template>
  <div class="navbar bg-base-100 shadow">
    <div class="navbar-start">
      <NuxtLink class="btn btn-ghost text" to="/">daisyUI</NuxtLink>
    </div>

    <div class="navbar-end">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-sm">
          <div class="indicator">
            <IconsTrolley class="h-5 w-5" />
            <span class="badge badge-sm indicator-item">8</span>
          </div>
          <p class="hidden sm:block">Client</p>
        </div>
        <div
          tabindex="0"
          class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
        >
          <div class="card-body">
            <span class="font-bold text-lg">8 Items</span>
            <span class="text-info">Subtotal: $999</span>
            <div class="card-actions">
              <button class="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>
      </div>

      <div class="dropdown dropdown-end">
        <!-- btn-circle avatar -->
        <div tabindex="0" role="button" class="btn btn-ghost">
          <IconsTrolley class="h-5 w-5" />
          <p class="hidden sm:block">Client</p>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li v-for="link in linkMenu.client" :key="link.link">
            <NuxtLink :to="`${link.link}`">{{ link.title }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost">
          <IconsServer class="h-5 w-5" />
          <p class="hidden sm:block">Server</p>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li v-for="link in linkMenu.server" :key="link.link">
            <NuxtLink :to="`${link.link}`">{{ link.title }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import type { Item } from "~/types/LinkItem"
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
      title: "Home",
    },
    {
      link: "/user",
      title: "User",
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
