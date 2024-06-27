<template>
  <div class="join w-full max-w-xl">
    <input
      placeholder="Search"
      class="join-item input input-bordered input-sm w-full"
      v-model="search"
    />
    <button @click="handleSearch" class="btn-sm md:btn-md btn join-item">
      <IconsSearch />
    </button>
  </div>
</template>

<script lang="ts" setup>
const { handleSearch, search } = useSearch()
</script>
