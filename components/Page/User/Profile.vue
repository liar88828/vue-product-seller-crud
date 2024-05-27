<template>
  <div class="card bg-base-100">
    <div class="card-body">
      <!--  -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div class="stats shadow">
          <div class="stat">
            <div class="stat-figure text-primary">
              <IconsLoveOutlet class="inline-block w-8 h-8 stroke-current" />
            </div>
            <div class="stat-title text-sm sm:text-md font-bold">Total Buy</div>
            <div class="stat-value text-primary text-lg sm:text-2xl">25.6K</div>
            <div class="stat-desc text-xs sm:text-md">
              21% more than
              <br />
              last month
            </div>
          </div>
        </div>
        <div class="stats shadow">
          <div class="stat">
            <div class="stat-figure text-secondary">
              <IconsThunder class="inline-block w-8 h-8 stroke-current" />
            </div>
            <div class="stat-title text-sm sm:text-md font-bold">
              Page Views
            </div>
            <div class="stat-value text-secondary text-lg sm:text-2xl">
              2.6M
            </div>
            <div class="stat-desc text-xs sm:text-md">
              21% more than
              <br />
              last month
            </div>
          </div>
        </div>
        <div class="stats shadow">
          <div class="stat">
            <div class="stat-figure text-warning">
              <div class="stat-figure text-warning">
                <IconsBook class="inline-block w-8 h-8 stroke-current" />
              </div>
            </div>
            <div class="stat-title text-sm sm:text-md font-bold">
              Tasks done
            </div>
            <div class="stat-value text-warning text-lg sm:text-2xl">86%</div>
            <div class="stat-desc text-xs sm:text-md">
              31 tasks <br />remaining
            </div>
          </div>
        </div>
        <!--  -->
      </div>

      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium">User Profile</h3>
        <p class="mt-1 max-w-2xl text-sm">
          This is some information about the user.
        </p>
      </div>

      <!-- <EleDivider /> -->
      <div class="border-t px-4 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">
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
      <!-- <EleDivider /> -->
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Edit</button>
        <button class="btn btn-primary">Print</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { User } from "@prisma/client"

defineProps<{ data: User }>()
</script>
