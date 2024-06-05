<template>
  <Card :bg="false" :class="`bg-base-100/80  `">
    <CardBody>
      <!--  -->
      <div class="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-2">
        <Static
          :data="userStatics[0]"
          :class="'text-primary'"
          :icon="IconsLoveOutlet"
        />

        <Static
          :data="userStatics[1]"
          :class="'text-warning'"
          :icon="Thunder"
        />
        <Static
          :data="userStatics[2]"
          :class="'text-secondary'"
          :icon="Book"
          :is-task="true"
        />

        <!-- <CardInit :class="'card-bordered '">
          <div class="card-title text-secondary">
            <IconsThunder class="inline-block w-8 h-8 stroke-current" />
          </div>
          <div class="card-title text-sm sm:text-md font-bold">Page Views</div>
          <div class="card-value text-secondary text-lg sm:text-2xl">2.6M</div>
          <div class="card-desc text-xs sm:text-md">
            21% more than
            <br />
            last month
          </div>
        </CardInit>

        <CardInit class="card">
          <div class="card-body text-warning">
            <IconsBook class="inline-block w-8 h-8 stroke-current" />
          </div>
          <div class="card-title text-sm sm:text-md font-bold">Tasks done</div>
          <div class="card-value text-warning text-lg sm:text-2xl">86%</div>
          <div class="card-desc text-xs sm:text-md">
            31 tasks <br />remaining
          </div>
        </CardInit> -->
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
        <button class="btn btn-outline">Edit</button>
        <button class="btn btn-outline">Print</button>
        <button class="btn btn-outline btn-error">Exit</button>
      </div>
    </CardBody>
  </Card>
</template>

<script lang="ts" setup>
import IconsLoveOutlet from "~/components/Icons/Love/Outlet.vue"
import type { User } from "@prisma/client"
import { userStatics } from "~/assets/example/user/static"
import Thunder from "~/components/Icons/Thunder.vue"
import Book from "~/components/Icons/Person/Book.vue"
import Static from "./Static.vue"

defineProps<{ data: User }>()
</script>
