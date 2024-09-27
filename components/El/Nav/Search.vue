<template>
  <div class="join w-full">
    <input
      placeholder="Search"
      class="join-item input input-bordered input-sm w-full"
      v-model="search"
    />
    <button @click="handleSearch" class="btn-sm btn join-item">
      <IconsSearch />
    </button>
  </div>
</template>

<script lang="ts" setup>
const { handleSearch, search } = useSearch()
</script>
