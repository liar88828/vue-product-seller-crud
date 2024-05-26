<script setup lang="ts">
import { staticLink } from "~/assets/link/shopLink"
</script>

<template>
  <div class="flex justify-between flex-col">
    <div class="flex">
      <div class="input input-bordered flex items-center gap-2 input-sm w-full">
        <input type="text" class="grow" placeholder="Search" />
        <IconsSearch />
      </div>

      <button class="btn btn-info btn-sm">Create</button>
    </div>
    <div class="">
      <ul
        class="menu menu-xs menu-horizontal bg-base-100 rounded shadow w-full flex justify-between"
      >
        <EleMenuDrop :data="staticLink.category" />
        <EleMenuDrop :data="staticLink.stock" />
        <EleMenuDrop :data="staticLink.price" />
      </ul>
    </div>
  </div>
</template>
