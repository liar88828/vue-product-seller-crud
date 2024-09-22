<script setup lang="ts">
import { dataProducts } from "~/assets/example/product/dataProduct"
import Notify from "./Notify.vue"
import Auths from "../../Nav/Auths.vue"
const totalTrolly = computed(() => dataProducts.length)
const totalPrice = computed(() => dataProducts.reduce((a, b) => a + b.price, 0))
const { loggedIn, clear } = useUserSession()
</script>
<template>
  <div class="dropdown dropdown-end z-40 sm:mt-2 mt-2">
    <Notify :loggedIn="loggedIn" />

    <div
      tabindex="1"
      class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
    >
      <div class="card-body" v-if="loggedIn">
        <div class="flex items-center justify-between">
          <div class="font-bold text-lg">{{ totalTrolly }} Items</div>
          <!-- <ElDropDownSetting /> -->
        </div>
        <span class="text-info">Subtotal: {{ getRupiah(totalPrice) }}</span>
        <div class="card-actions"></div>
      </div>
      <div class="card-body flex flex-row justify-between" v-if="loggedIn">
        <ElTheme />
        <NuxtLink to="/user/trolly" class="btn btn-primary btn-square">
          <IconsTrolley />
        </NuxtLink>
        <button @click="() => clear()" class="btn btn-info btn-square">
          <IconsExit class="icons" />
        </button>
      </div>
      <div class="card-body" v-else>
        <div class="flex justify-center items-center">
          <Auths />
        </div>
      </div>
    </div>
  </div>
</template>
