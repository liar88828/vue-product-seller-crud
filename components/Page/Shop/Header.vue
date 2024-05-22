<template>
  <section class="navbar bg-base-100 shadow px-5">
    <div class="navbar-start hidden sm:block">
      <a class="flex items-center gap-2" href="#">
        <IconsHandLove />
        <div class="font-semibold text-lg">
          <span>Acme </span>
          <span>Store</span>
        </div>
      </a>
    </div>

    <div class="navbar-center w-[80%] sm:w-[60%]">
      <div
        class="input input-bordered input-sm input:input-md flex items-center gap-2 w-full"
      >
        <IconsSearch />
        <input type="text" class="grow" placeholder="Search" v-model="search" />
      </div>
    </div>

    <div class="navbar-end">
      <button class="btn btn-ghost btn-sm">
        <div class="indicator">
          <IconsTrolley class="h-5 w-5" />
          <span class="badge badge-sm indicator-item badge-info">8</span>
        </div>
        <!-- <p class="hidden sm:block">Client</p> -->
      </button>
    </div>
  </section>
</template>

<script lang="ts" setup>
const search = ref()
</script>
