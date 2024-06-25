<template>
  <div class="join w-full">
    <input
      placeholder="Search"
      class="join-item input input-bordered input-sm md:input-md w-full sm:w-1/2"
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
