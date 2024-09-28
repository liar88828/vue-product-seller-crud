<template>
  <CardSide :class="'card-bordered '">
    <figure class="w-1/3">
      <img
        alt="Related product"
        :src="data.Product.image ?? 'https://picsum.photos/300 '"
        class="w-full h-36 object-cover"
      />
    </figure>

    <!-- <PageProductModelDescTrolly
        :side="true"
        :data="data"
        v-model:detail="detail"
      /> -->

    <CardBody class="w-2/3">
      <CardHead :title="data.Product?.name" :class="titleStyle">
        <div class="flex gap-2">
          <button
            @click="handlerDeleteTrolly"
            class="btn btn-sm btn-square btn-error btn-outline"
          >
            <IconsTrash />
          </button>
          <!-- @click="handlerAddTrolly" -->
          <button
            @click="() => handlerMark(data)"
            :class="[
              'btn btn-sm btn-square btn-info btn-outline',
              foundItem ? 'btn-active' : '',
            ]"
          >
            <IconsMark />
          </button>
          <!-- <button class="btn btn-info" @click="() => (addTotal = 'test')">
        test
      </button> -->
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
                    counter++
                    handlerMark(data, true)
                  }
                "
              >
                +
              </button>
              <span class="">{{ counter }}</span>
              <button
                class="btn btn-square btn-xs"
                @click="
                  () => {
                    decrementTrolley({
                      id_product: data.id_product,
                      id_trolley: data.id,
                      qty: 0,
                    })
                    counter--
                    handlerMark(data, true)
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
const detail = ref<boolean>(false)
const { incrementTrolley, decrementTrolley } = useTrolley()
const props = defineProps<{
  data: NewTolleyProps
}>()
// const detail = defineModel("detail", { required: true })

const addTotal = useState<TolleyMark[]>("add_total")
const foundItem = computed(() =>
  addTotal.value.map((i) => i.id_product).includes(props.data.id)
)
const handlerMark = (item: NewTolleyProps, count = false) => {
  if (count) {
    addTotal.value = addTotal.value.map((i) => {
      if (i.id_product === item.id) {
        i.qty = counter.value
      }
      return i
    })
  } else if (item) {
    if (foundItem.value) {
      console.log("mark", item)
      addTotal.value = addTotal.value.filter((i) => i.id_product !== item.id)
    } else {
      console.log("add")
      addTotal.value.push({
        id_product: item.id,
        name: item.Product?.name ?? "",
        // price: item.price,
        qty: counter.value,
      })
    }
  }
}

const titleStyle = "text-sm sm:text-md md:text-lg font-bold"

const counter = ref<number>(props.data.qty)

const handlerDeleteTrolly = () => {
  console.log(`delete trolly ${props.data.id}`)
}

const { id } = useRoute().params
const handlerAddTrolly = async () => {
  // console.log(`Add trolly ${props.data.id}`)
  console.log(`Add trolly ${id}`)
  // const { data } = await useFetch(`/api/user/trolly/${props.data.id}`, {
  //   method: "POST",
  //   body: counter.value,
  // })
  // console.log(data)
}
</script>
