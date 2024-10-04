<template>
  <div class="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-2">
    <Static
      :data="userStatics[0]"
      :class="'text-primary'"
      :icon="IconsLoveOutlet"
    />

    <Static :data="userStatics[1]" :class="'text-warning'" :icon="Thunder" />
    <Static
      :data="userStatics[2]"
      :class="'text-secondary'"
      :icon="Book"
      :is-task="true"
    />
  </div>
</template>

<script setup lang="ts">
import Static from "./StaticItem.vue"
import IconsLoveOutlet from "~/components/Icons/Love/Outlet.vue"
import Thunder from "~/components/Icons/Thunder.vue"
import Book from "~/components/Icons/Book.vue"
</script>
