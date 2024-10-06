<template>
  <CardParentSide :title="'Like'">
    <section
      v-for="item in data"
      :key="item.Product.id"
      class="card card-compact card-side shadow-lg"
    >
      <figure class="w-1/3">
        <img
          alt="Related product"
          :src="item.Product.image ?? 'https://picsum.photos/300 '"
          class="w-full h-36 object-cover"
        />
      </figure>
      <CardBody class="w-2/3">
        <CardHead
          :title="item.Product.name"
          class="text-sm sm:text-md md:text-lg font-bold"
          :data="item"
        >
          <div>
            <NuxtLink to="#" class="btn btn-square btn-sm">
              <IconsDetail />
            </NuxtLink>
          </div>
        </CardHead>

        <div>
          <ElRating :rating="3" />

          <div class="flex justify-between mt-2">
            <div class="flex flex-col gap-1">
              <h4 class="text-md sm:text-lg md:text-xl font-bold">
                {{ getRupiah(item.Product.price) }}
              </h4>
              <p class="text-sm whitespace-nowrap space-x-1">
                <span class="badge badge-primary badge-sm sm:badge-md">{{
                  123
                }}</span>
                <span class="text-xs sm:text-sm">Sold</span>
              </p>
            </div>

            <div class="flex items-end gap-2">
              <button
                @click="handlerDeleteTrolly"
                class="btn btn-sm btn-square btn-error"
              >
                <IconsTrash />
              </button>

              <button
                @click="handlerAddTrolly"
                class="btn btn-sm btn-square btn-info"
              >
                <IconsTrolley />
              </button>
            </div>
          </div>
        </div>
      </CardBody>
    </section>
  </CardParentSide>
</template>

<script lang="ts" setup>
defineProps<{ data: LikeProduct[] }>()
const handlerDeleteTrolly = () => {}

const handlerAddTrolly = async () => {}
</script>
