<template>
  <section class="min-h-screen bg-base-300 w-screen">
    <section class="navbar bg-base-100 shadow h-16">
      <div class="flex-none">
        <button class="btn btn-ghost btn-square" @click="router.push('/home')">
          <IconsHome class="icons" />
        </button>
      </div>
      <div class="flex-1 gap-2 items-center justify-center">
        <!-- <Search /> -->
      </div>
      <div class="flex-none">
        <!-- Setting  -->
      </div>
    </section>
    <div class="flex">
      <main class="container mx-auto mt-3 mb-20 md:mb-10 min-h-screen">
        <ElHeadTab :items="itemsArray" />
        <slot />
        <ElNavBottom class="fixed" />
      </main>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { MarketLink } from "~/assets/link/tabLink"
import type { Item } from "~/types/globals/LinkItem"

const itemsArray = ref<Item[]>(MarketLink)
const router = useRouter()
</script>
