<template>
  <div class="flex items-center gap-0.5">
    <IconsStar
      v-for="i in rating"
      :class="i <= 4 ? 'w-5 h-5 fill-primary' : 'w-5 h-5 text-black'"
    />
  </div>
</template>

<script lang="ts" setup>
defineProps<{ rating: number }>()
</script>
