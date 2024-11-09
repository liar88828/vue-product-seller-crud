<template>
  <CardSide :class="'card-bordered '">
    <figure class="w-1/3">
      <img
        alt="Related product"
        :src="data.Product.image ?? 'https://picsum.photos/300 '"
        class="w-full h-36 object-cover"
      />
    </figure>

    <CardBody class="w-2/3">
      <CardHead :title="data.Product?.name" :class="titleStyle">
        <div class="flex gap-2">
          <button
            @click="() => removeTrolley(data.id)"
            class="btn btn-sm btn-square btn-error btn-outline"
          >
            <IconsTrash />
          </button>
          <!-- @click="handlerAddTrolly" -->
          <button
            @click="
              () => {
                data.mark = !data.mark
                markTrolley({
                  id_trolley: data.id,
                  mark: data.mark,
                })
              }
            "
            :class="[
              'btn btn-sm btn-square btn-info btn-outline',
              data.mark ? 'btn-active' : '',
            ]"
          >
            <IconsMark />
          </button>
        </div>
      </CardHead>
      <div v-if="data.Product">
        <div class="">
          <!-- <h2 class="font-bold card-title text-sm sm:text-md">
        {{ getTextSplit(data.Product.name, 35) }}
      </h2> -->

          <ElRating :rating="3" />
        </div>

        <div class="flex justify-between mt-2">
          <div class="flex flex-col gap-1">
            <h4 class="text-sm sm:text-md md:text-lg font-bold">
              {{ getRupiah(data.Product.price) }}
            </h4>
            <p class="text-sm whitespace-nowrap space-x-1">
              <span class="badge badge-info badge-sm sm:badge-md">
                {{ 123 }}
              </span>
              <span class="text-xs sm:text-sm">Sold</span>
            </p>
          </div>

          <div class="flex items-end">
            <!-- <Counter v-model:counter="counter" /> -->
            <div class="flex gap-2 p-1 items-center">
              <button
                class="btn btn-square btn-xs"
                @click="
                  () => {
                    incrementTrolley({
                      id_product: data.id_product,
                      id_trolley: data.id,
                      qty: 0,
                    })
                    data.qty++
                  }
                "
              >
                +
              </button>
              <span class="">{{ data.qty }}</span>
              <button
                class="btn btn-square btn-xs"
                @click="
                  () => {
                    decrementTrolley({
                      id_product: data.id_product,
                      id_trolley: data.id,
                      qty: 0,
                    })
                    data.qty--
                  }
                "
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </CardBody>
  </CardSide>
</template>

<script lang="ts" setup>
const props = defineProps<{
  data: TrolleyProduct
}>()
const { incrementTrolley, decrementTrolley, markTrolley, removeTrolley } =
  useTrolley()
const titleStyle = "text-sm sm:text-md md:text-lg font-bold"
</script>
