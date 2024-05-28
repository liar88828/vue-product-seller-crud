<template>
  <ul
    class="menu md:menu-vertical menu-horizontal bg-base-100 rounded shadow w-full flex justify-between"
  >
    <li class="shadow bg-base-300">
      <!-- <a href="">
        <IconsFilter class="h-5 w-5" />
        <span class="">Filter</span>
      </a> -->
      <EleModalFilter />
    </li>
    <EleMenuDrop :open="true" :data="staticLink.price" />
    <EleMenuDrop :open="true" :data="staticLink.category" />
    <EleMenuDrop :open="true" :data="staticLink.color" />
  </ul>
</template>

<script lang="ts" setup>
import { staticLink } from "~/assets/link/shopLink"
</script>
