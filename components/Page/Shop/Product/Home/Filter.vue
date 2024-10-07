<template>
  <div class="bg-base-100 rounded-lg shadow">
    <ul ref="size" class="menu menu-horizontal flex justify-between">
      <li class="bg-base-200 rounded-lg">
        <ElModalFilter />
      </li>
      <ElMenuDrop :open="getData" :data="staticLink.price" />
      <ElMenuDrop :open="getData" :data="staticLink.category" />
      <ElMenuDrop :open="getData" :data="staticLink.color" />
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { staticLink } from "~/assets/link/shopLink"

const size = ref<HTMLUListElement>()
const getData = ref<boolean>(false)

// onMounted(() => {
//   if (size.value) {
//     getData.value = size.value.clientWidth >= 640 //382
//   }
// })
</script>
