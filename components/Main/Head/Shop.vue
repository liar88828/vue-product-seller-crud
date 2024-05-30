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

    <div class="navbar-center w-[70%] sm:w-[60%]">
      <!-- <div
        class="input input-bordered input-sm input:input-md flex items-center gap-2 w-full"
      >
        <IconsSearch />
        <input type="text" class="grow" placeholder="Search" v-model="search" />
      </div> -->

      <div class="join w-full">
        <div
          class="join-item input input-bordered input-sm md:input-md flex items-center w-full"
        >
          <input placeholder="Search" />
        </div>
        <!-- <select class="select select-bordered join-item select-sm md:select-md">
          <option disabled selected class="hidden sm:inline">Filter</option>
          <option>Sci-fi</option>
          <option>Drama</option>
          <option>Action</option>
        </select> -->
        <button class="btn-sm md:btn-md btn join-item">
          <IconsSearch />
          <span class="hidden sm:inline"> Search </span>
        </button>
      </div>


   
    </div>

    <div class="navbar-end">
      <DropDownTrolly/>
      <DropDownNotify/>
    </div>
  </section>
</template>

<script lang="ts" setup>
const search = ref()
</script>
