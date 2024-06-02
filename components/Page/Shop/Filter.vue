<template>
  <div class="h-full bg-base-100">
    <ul
      ref="size"
      class="menu md:menu-vertical menu-horizontal rounded w-full flex justify-between md:space-y-2"
    >
      <li class="bg-base-100 shadow">
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
onMounted(() => {
  // getData.value = size.value?.clientWidth ?? 0
  // console.log(getData.value)

  if (size.value) {
    console.log("is mobile", size.value.clientWidth)
    console.log("is mobile")
    console.log(size.value.clientWidth < 183 ? true : false)
    getData.value = size.value.clientWidth <= 183 ? true : false
    getData.value = size.value.clientWidth <= 382 ? true : false
  }
  // computed(() => {
  // })
})
onMounted(() => {
  if (size.value) {
    console.log("is mounted")

    console.log(size.value.clientWidth <= 183 ? true : false)
  }
})
// const sizeValue = computed(() => size.value?.clientWidth ?? 0)
// console.log(sizeValue.value)
// console.log(setSize.value)
</script>
