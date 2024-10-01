<template>
  <span v-if="item === ''">
    {{ "please complete" }}
    <button
      class="btn btn-error btn-sm sm:btn-md btn-square"
      @click="
        () => {
          router.push({
            path: '/user/profile/edit',

            query: {
              redirectPath: $route.path,
            },
          })
        }
      "
    >
      <IconsEdit />
    </button>
  </span>
  <span v-else> {{ item }}</span>
</template>

<script setup lang="ts">
const router = useRouter()
defineProps<{
  item: string | undefined
}>()
</script>
