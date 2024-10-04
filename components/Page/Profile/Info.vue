<template>
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <template v-else>
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium">User Profile</h3>
      <p class="mt-1 max-w-2xl text-sm">
        This is some information about the user.
      </p>
    </div>

    <!-- <EleDivider /> -->
    <div class="border-t px-4 sm:p-0">
      <dl class="sm:divide-y sm:divide-gray-200 grid grid-cols-2">
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium">Full name</dt>
          <dd class="mt-1 text-sm sm:mt-0 sm:col-span-2">
            {{ data.name }}
          </dd>
        </div>
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium">Email address</dt>
          <dd class="mt-1 text-sm sm:mt-0 sm:col-span-2">
            {{ data.email }}
          </dd>
        </div>
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium">Phone number</dt>
          <dd class="mt-1 text-sm sm:mt-0 sm:col-span-2">
            {{ data.phone }}
          </dd>
        </div>
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium">Address</dt>
          <dd class="mt-1 text-sm sm:mt-0 sm:col-span-2">
            {{ data.address }}
          </dd>
        </div>
      </dl>
    </div>

    <div class="card-actions justify-end">
      <NuxtLink to="/user/profile/edit" class="btn btn-outline">Edit</NuxtLink>
      <button class="btn btn-outline">Print</button>
      <button class="btn btn-outline btn-error">Exit</button>
    </div>
  </template>
</template>

<script setup lang="ts">
const { data, pending, error } = await useFetch("/api/user/profile", {
  transform: (d) => d.user,
})
</script>
