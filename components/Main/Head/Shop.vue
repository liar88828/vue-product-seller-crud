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
        <select class="select select-bordered join-item select-sm md:select-md">
          <option disabled selected class="hidden sm:inline">Filter</option>
          <option>Sci-fi</option>
          <option>Drama</option>
          <option>Action</option>
        </select>
        <button class="btn-sm md:btn-md btn join-item">
          <IconsSearch />
          <span class="hidden sm:inline"> Search </span>
        </button>
      </div>
    </div>

    <div class="navbar-end">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-sm">
          <div class="indicator">
            <IconsTrolley class="h-6 w-6" />
            <span class="badge badge-sm indicator-item badge-primary">8</span>
          </div>
          <p class="hidden sm:block">Client</p>
        </div>

        <div
          tabindex="0"
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
    </div>
  </section>
</template>

<script lang="ts" setup>
const search = ref()
</script>
