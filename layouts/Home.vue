<template>
  <section class="min-h-screen bg-base-300 w-screen">
    <section
      class="navbar bg-base-100 shadow h-16 flex justify-between sm:justify-around sm:gap-6 sm:px-4"
    >
      <div class="flex-none">
        <!-- <IconsMenu class="size-7" /> -->
      </div>

      <div class="flex-1 gap-2 items-center justify-center ml-2 w-full">
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
const { loggedIn } = useUserSession()
</script>
