<script setup lang="ts">
import Trolley from "../Icons/Trolley.vue"
</script>

<template>
  <div class="dropdown dropdown-end">
    <DropDownIcon index="1" indicator="2" :icon="Trolley" />
    <!-- <IconsTrolley class=" /> -->
    <!-- text="client" -->

    <!-- <div tabindex="1" role="button" class="btn btn-ghost btn-sm">
      <div class="indicator">
        <IconsTrolley class="h-6 w-6" />
        <span class="badge badge-sm indicator-item badge-primary">8</span>
      </div>
      <p class="hidden sm:block">Client</p>
    </div> -->

    <div
      tabindex="1"
      class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
    >
      <div class="card-body">
        <span class="font-bold text-lg">8 Items</span>
        <span class="text-info">Subtotal: $999</span>
        <div class="card-actions">
          <NuxtLink to="/user/trolly" class="btn btn-primary btn-block"
            >View cart</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
