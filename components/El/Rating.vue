<template>
  <div class="flex items-center gap-0.5">
    <!-- <IconsStar
      v-for="i in rating"
      :class="i <= 4 ? 'w-5 h-5 fill-primary' : 'w-5 h-5 text-black'"
    /> -->

    <!-- less Star -->
    <IconsStar
      v-for="i in lessStar"
      :class="'w-3 h-3 sm:w-5 sm:h-5 text-warning'"
    />

    <!-- More Star -->
    <IconsStar
      v-for="i in moreStar"
      :class="'w-3 h-3 sm:w-5 sm:h-5 text-slate-400'"
    />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ rating: number }>()

const totalStar = 5
const lessStar = totalStar - props.rating
const moreStar = totalStar - lessStar
</script>
