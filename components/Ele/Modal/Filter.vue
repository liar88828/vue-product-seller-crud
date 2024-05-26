<template>
  <button onclick="my_modal_1.showModal()">
    <IconsFilter class="h-5 w-5" /> Filter
  </button>
  <dialog id="my_modal_1" class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-2xl flex items-center gap-2 m-2">
        Filter <IconsFilter />
      </h3>
      <div class="space-y-2">
        <LayCardWrap class="bg-base-100 card-bordered">
          <div class="gap-2 flex flex-wrap">
            <span
              v-if="isMore(filterCase.category)"
              class="badge gap-2 badge-error"
            >
              <IconsX @click="filterCase.category = ''" />
              {{ filterCase.category }}</span
            >
            <span v-if="isMore(filterCase.sort)" class="badge gap-2 badge-info">
              <IconsX @click="filterCase.sort = ''" />
              {{ filterCase.sort }}</span
            >
            <span
              v-if="isMore(filterCase.brand)"
              class="badge gap-2 badge-warning"
            >
              <IconsX @click="filterCase.brand = ''" />
              {{ filterCase.brand }}</span
            >
            <div
              class="bg-success/20 flex gap-2 p-2 flex-wrap"
              v-if="
                isMore(filterCase.price.min.toString()) ||
                isMore(filterCase.price.min.toString())
              "
            >
              <span
                v-if="isMore(filterCase.price.min.toString())"
                class="badge gap-2 badge-outline"
              >
                <IconsX
                  @click="filterCase.price = { ...filterCase.price, min: 0 }"
                />
                Min {{ formatRupiah(filterCase.price.min) }}</span
              >
              <span
                v-if="isMore(filterCase.price.max.toString())"
                class="badge gap-2 badge-outline"
              >
                <IconsX
                  @click="filterCase.price = { ...filterCase.price, max: 0 }"
                />
                Max {{ formatRupiah(filterCase.price.max) }}</span
              >
            </div>
          </div>
        </LayCardWrap>

        <LayCardWrap class="bg-error/20">
          <h1 class="card-title text-md sm:text-lg">Catergory</h1>
          <div v-if="isMore(filterCase.category)">
            <button
              class="btn btn-outline btn-sm"
              @click="filterCase.category = ''"
            >
              {{ filterCase.category }}
            </button>
          </div>
          <div
            class="flex flex-wrap gap-2 jus"
            v-if="!isMore(filterCase.category)"
          >
            <button
              class="btn btn-outline btn-sm"
              v-for="text in dataFilter.category"
              @click="filterCase.category = text"
            >
              {{ text }}
            </button>
          </div>
        </LayCardWrap>

        <LayCardWrap class="bg-info/20">
          <h1 class="card-title text-md sm:text-lg">Sort</h1>
          <div v-if="isMore(filterCase.sort)">
            <button
              class="btn btn-outline btn-sm"
              @click="filterCase.sort = ''"
            >
              {{ filterCase.sort }}
            </button>
          </div>
          <div class="flex flex-wrap gap-2" v-if="!isMore(filterCase.sort)">
            <button
              class="btn btn-outline btn-sm"
              v-for="text in dataFilter.sort"
              @click="filterCase.sort = text"
            >
              {{ text }}
            </button>
          </div>
        </LayCardWrap>

        <LayCardWrap class="bg-warning/20">
          <h1 class="card-title text-md sm:text-lg">Brand</h1>
          <div v-if="isMore(filterCase.brand)">
            <button
              class="btn btn-outline btn-sm"
              @click="filterCase.brand = ''"
            >
              {{ filterCase.brand }}
            </button>
          </div>
          <div class="flex flex-wrap gap-2" v-if="!isMore(filterCase.brand)">
            <button
              class="btn btn-outline btn-sm"
              v-for="text in dataFilter.brand"
              @click="filterCase.brand = text"
            >
              {{ text }}
            </button>
          </div>
        </LayCardWrap>

        <LayCardWrap class="bg-success/20">
          <h1 class="card-title text-md sm:text-lg">Price Range</h1>
          <div class="flex gap-2 items-center">
            <input
              type="text"
              placeholder="Min Price"
              class="input input-bordered w-full max-w-xs input-sm"
              v-model="filterCase.price.min"
            />

            <input
              type="text"
              placeholder="Max Price"
              class="input input-bordered w-full max-w-xs input-sm"
              v-model="filterCase.price.max"
            />
          </div>
          <!-- <button
              @click="filterCase.price = { min: 0, max: 0 }"
              class="btn btn-outline btn-sm max-w-xs"
            >
              Set
            </button> -->
          <button
            @click="filterCase.price = { min: 0, max: 0 }"
            class="btn btn-outline btn-sm"
          >
            Reset
          </button>
        </LayCardWrap>
      </div>

      <div class="modal-action">
        <button class="btn">Set</button>
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

<script lang="ts" setup>
const { formatRupiah } = useFormat()

const filterCase = reactive<{
  category: string
  sort: string
  brand: string
  price: {
    min: number
    max: number
  }
}>({
  category: "",
  sort: "",
  brand: "",
  price: {
    min: 0,
    max: 0,
  },
})

const isMore = (text: string) => text.length > 1

const dataFilter = {
  category: ["Chocolate", "Grapes", "Milk", "Bread"],
  sort: ["Asc", "Desc"],
  brand: ["BMW", "Gigabyte", "Lenovo", "Asus", "Apple", "Samsung", "Dell"],
  price: {
    min: 0,
    max: 0,
  },
}
console.log(isMore(filterCase.price.max.toString()))
</script>
