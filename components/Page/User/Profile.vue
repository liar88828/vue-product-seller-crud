<template>
  <div class="card bg-base-100">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium">User Profile</h3>
      <p class="mt-1 max-w-2xl text-sm">
        This is some information about the user.
      </p>
    </div>

    <div class="border-t px-4 py-5 sm:p-0">
      <dl class="sm:divide-y sm:divide-gray-200">
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium">Full name</dt>
          <dd class="mt-1 text-sm sm:mt-0 sm:col-span-2">
            {{ userProfile.name }}
          </dd>
        </div>
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium">Email address</dt>
          <dd class="mt-1 text-sm sm:mt-0 sm:col-span-2">
            {{ userProfile.email }}
          </dd>
        </div>
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium">Phone number</dt>
          <dd class="mt-1 text-sm sm:mt-0 sm:col-span-2">
            {{ userProfile.phone }}
          </dd>
        </div>
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium">Address</dt>
          <dd class="mt-1 text-sm sm:mt-0 sm:col-span-2">
            {{ userProfile.address }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script lang="ts" setup>
const userProfile = {
  name: "John Doe",
  email: "johndoe@example.com",
  phone: "(123) 456-7890",
  address: "123 Main St, Anytown, USA 12345",
}
</script>
