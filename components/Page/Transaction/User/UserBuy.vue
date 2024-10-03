<template>
  <ElLoading v-if="pending" />
  <ElError v-else-if="error || !data" />
  <section v-else class="gap-4">
    <div>
      <h3 class="nota-title">
        <IconsUser />
        <span> Customer Information </span>
      </h3>
      <div class="gap-2 flex flex-col">
        <div class="flex items-center justify-between">
          <div class="font-medium">Name</div>
          <div>{{ data.user.name }}</div>
        </div>
        <div class="flex items-center justify-between">
          <div class="font-medium">Phone</div>
          <div>{{ getPhone(data.user.phone) }}</div>
        </div>
        <div class="flex items-center justify-between">
          <div class="font-medium">Address</div>
          <div>{{ data.user.address }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  id_user: UserPublic["id"]
}>()

const { data, pending, error } = await useUser().getUserById(props.id_user)
</script>
