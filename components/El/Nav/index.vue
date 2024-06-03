<template>
  <section class="navbar bg-base-100 shadow">
    <div class="navbar-start">
      <NuxtLink class="btn btn-ghost text" to="/home">daisyUI</NuxtLink>
    </div>

    <div class="navbar-end">
      <ElDropDownSetting />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import type { Item } from "~/types/globals/LinkItem"
</script>
