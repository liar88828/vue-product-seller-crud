<template>
  <Card :bg="false" :class="`bg-base-100/80  `">
    <CardBody>
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
              <input v-model="data.name" class="w-full" />
            </dd>
          </div>
          <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium">Email address</dt>
            <dd class="mt-1 text-sm sm:mt-0 sm:col-span-2">
              <input v-model="data.email" class="w-full" />
            </dd>
          </div>
          <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium">Phone number</dt>
            <dd class="mt-1 text-sm sm:mt-0 sm:col-span-2">
              <input v-model="data.phone" class="w-full" />
            </dd>
          </div>
          <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium">Address</dt>
            <dd class="mt-1 text-sm sm:mt-0 sm:col-span-2">
              <textarea v-model="data.address" class="w-full h-20"></textarea>
            </dd>
          </div>
        </dl>
      </div>
      <!-- <EleDivider /> -->
      <div class="card-actions justify-end">
        <button @click="handleSave" class="btn btn-info">Save</button>
      </div>
    </CardBody>
  </Card>
</template>

<script lang="ts" setup>
import type { User } from "@prisma/client"

const props = defineProps<{ data: User }>()

const handleSave = async () => {
  console.log(props.data)
  await navigateTo("/user/profile")
}
</script>
