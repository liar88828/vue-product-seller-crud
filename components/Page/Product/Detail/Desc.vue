<template>
  <section class="card card-compact bg-base-100">
    <div class="card-body">
      <div class="flex justify-between items-center">
        <h1 class="card-title">{{ data.name }}</h1>
        <button @click="onLike" class="btn btn-circle btn-ghost btn-sm">
          <ElLoading v-if="likePending" />
          <IconsLoveError v-else-if="errorLike || !dataLike" />
          <IconsLoveRed class="size-6" v-else-if="dataLike.like" />
          <IconsLoveOutlet class="size-6" v-else />
        </button>
      </div>
      <p class="leading-6">{{ data.description }}</p>
      <div class="grid grid-cols-2 sm:grid-cols-1 gap-4 justify-end mt-5">
        <ElLoading v-if="isPending" />
        <NuxtLink
          v-else
          :to="`/product/checkout/${data.id}`"
          class="btn btn-info font-bold btn-sm"
        >
          <IconsSell class="size-5" />
          <span> Buy Now </span>
        </NuxtLink>

        <ElLoading v-if="isPending" />
        <button
          v-else
          @click="() => onPush(data.id)"
          :class="['btn font-bold btn-sm', isPending && 'btn-disabled']"
        >
          <IconsTrolley class="size-5" />
          <span> Add to Cart </span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Product } from "@prisma/client"
import { useLike } from "~/composables/useLike"
const props = defineProps<{ data: Product }>()
const { pushTrolley } = useTrolley()
const { findProduct, likeProduct } = useLike()
const {
  data: dataLike,
  pending: likePending,
  error: errorLike,
} = await findProduct(props.data.id)
const isPending = ref(false)

const onLike = () => {
  console.log("is like")
  likeProduct(props.data.id)
}

const onPush = async (id: number) => {
  isPending.value = false
  const { pending } = await pushTrolley(id)
  isPending.value = pending.value
}
</script>
