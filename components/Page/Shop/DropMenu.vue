<template>
  <ul
    ref="size"
    class="menu md:menu-vertical menu-horizontal bg-base-100 rounded shadow w-full flex justify-between"
  >
    <li class="shadow bg-base-300">
      <EleModalFilter />
    </li>
    <EleMenuDrop :open="getData" :data="staticLink.price" />
    <EleMenuDrop :open="getData" :data="staticLink.category" />
    <EleMenuDrop :open="getData" :data="staticLink.color" />
  </ul>
</template>

<script lang="ts" setup>
import { staticLink } from "~/assets/link/shopLink"

const size = ref<HTMLUListElement>()
const getData = ref<boolean>(false)
onMounted(() => {
  // getData.value = size.value?.clientWidth ?? 0
  // console.log(getData.value)
  // console.log(getData.value < 628 ? false : true)
  if (size.value) {
    getData.value = size.value.clientWidth <= 183 ? true : false
  }
})
// const sizeValue = computed(() => size.value?.clientWidth ?? 0)
// console.log(sizeValue.value)
// console.log(setSize.value)
</script>
