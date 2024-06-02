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
    <!-- w-[70%] sm:w-[60%] -->
    <div
      :class="[
        'navbar-center w-[75%] sm:w-[60%] md:w-[70%]',
        hidden ? ' w-5/6 ' : '',
      ]"
    >
      <div class="join w-full">
        <input
          placeholder="Search"
          class="join-item input input-bordered input-sm md:input-md w-full"
        />

        <button class="btn-sm md:btn-md btn join-item">
          <IconsSearch />
        </button>
      </div>
    </div>

    <div :class="['navbar-end', hidden ? ' w-1/6 ' : '']">
      <ElDropDownTrolly />
      <!-- if has login -->
      <ElDropDownNotify v-if="!hidden" />
      <!-- if has not login -->
      <ElDropDownAccount v-if="!hidden" />
    </div>
  </section>
</template>

<script lang="ts" setup>
const search = ref()
const route = useRoute()
const hidden = computed(() => route.path.includes("shop"))
</script>
