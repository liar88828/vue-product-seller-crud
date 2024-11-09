<template>
  <section class="min-h-screen bg-base-300 w-screen">
    <section class="navbar bg-base-100 shadow h-16">
      <div class="flex-none">
        <button class="btn btn-ghost btn-square" @click="router.back()">
          <IconsBack class="icons" />
        </button>
      </div>
      <div class="flex-1 gap-2 items-center justify-center">
        <ElNavSearch />
      </div>
      <div class="flex-none">
        <button class="btn btn-ghost btn-square">
          <ElDropDownTrolleyNotify :loggedIn="loggedIn" />
        </button>
      </div>
    </section>
    <div class="flex">
      <ElNavBottom class="fixed" />

      <main class="container mx-auto mt-3 mb-20 md:mb-10 min-h-screen">
        <!-- <ElHeadTab :items="itemsArray" /> -->
        <slot />
      </main>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ShopMarketLink } from "~/assets/link/tabLink"
import type { Item } from "~/types/globals/LinkItem"

const itemsArray = ref<Item[]>(ShopMarketLink)
const router = useRouter()
const { loggedIn } = useUserSession()
</script>
