<template>
  <div class="join">
    <button class="join-item btn" @click="() => less">«</button>
    <button class="join-item btn">Page {{ pageNation }}</button>
    <button class="join-item btn" @click="() => more">»</button>
    <!-- {{ counter }} -->
    <!-- {{ props.keys }} -->
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ keys: keyPage; total: number }>()
const pageNation = useState(props.keys, () => 0)

const less = computed(() => {
  if (pageNation.value > 0) {
    return pageNation.value--
  }
})
const more = computed(() => {
  if (pageNation.value < props.total) {
    return pageNation.value++
  }
})
</script>
