<template>
  <CardInit class="card-normal">
    <CardHeadTitle
      title=" Product Specifications"
      :class="'text-xl sm:text-2xl font-bold'"
    >
      <!-- <p v-if="!refEdit" class="product-desc-p">
       {{ data.title }}
      </p> -->
    </CardHeadTitle>
    <!-- grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-7 mt-4 -->
    <div
      class="
      "
    >
      <div v-if="!refEdit" v-for="item in data" :key="item.title">
        <h3 class="text-md sm:text-lg font-bold">{{ item.title }}</h3>
        <ul class="flex flex-wrap sm:flex-none gap-2 list-inside list-disc">
          <li v-for="data in item.List" class="text-sm sm:text-md">
            <span>{{ data.specTitle }}</span> : <span>{{ data.text }}</span>
          </li>
        </ul>
      </div>

      <!-- Multi Form -->
      <div v-if="refEdit" class="grid gap-4 w-full">
        <h1>Add A New Specification</h1>

        <div class="grid gap-2 border p-2 rounded w-full">
          <!-- title -->

          <ElInputEdit
            place="Add Title Specification"
            v-model:title="store.title"
            :handler="onAddItem"
            btn="btn-primary"
          >
            <IconsPlus class="icons" />
          </ElInputEdit>

          <!-- list  -->
          <div class="grid grid-cols-2" v-for="(item, index) in store.List">
            <ElInputEdit
              place="Title Specification"
              v-model:title="item.specTitle"
              :handler="() => {}"
            >
            </ElInputEdit>
            <ElInputEdit
              place="Add Description "
              v-model:title="item.text"
              :handler="onDeleteItem"
              btn="btn-error"
            >
              <IconsTrash class="icons" />
            </ElInputEdit>
          </div>
          <!--  -->
          <button @click="onAdd" class="btn btn-accent">Add</button>
          <!--  -->
        </div>

        <!-- ----------------------------------------------------------- -->
        <div
          class="grid gap-2 border p-2 rounded"
          v-for="(item, index) in multiple"
          :key="item.title"
        >
          <Titles :title="item.title" :onDelete="onDelete">
            <div class="space-x-2">
              <button class="product-icon btn-error" @click="onDelete(index)">
                <IconsTrash class="icons" />
              </button>
              <button class="product-icon btn-warning" @click="onDelete(index)">
                <IconsPen class="icons" />
              </button>
            </div>
          </Titles>
          <div v-for="i in item.List" class="text-sm sm:text-md">
            <p>title : {{ i.specTitle }}</p>
            <p>desc : {{ i.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Button -->
    <button v-if="!refEdit" class="btn btn-info" @click="refEdit = !refEdit">
      Edit
    </button>
    <button v-else @click="onSave" class="btn btn-success">Save</button>
  </CardInit>
  {{ store }}
</template>

<script setup lang="ts">
import type { ProductItemServer } from "~/types/product/item"
import Titles from "./Titles.vue"
import { useSpec } from "~/composables/market/product/edit/useSpec"

const props = defineProps<{
  data: ProductItemServer["Spec"]
  id: ProductServer["id"]
}>()

const {
  store,
  multiple,
  refEdit,
  onAddItem,
  onDeleteItem,
  onAdd,
  onDelete,
  onSave,
} = useSpec(props.data, props.id)
</script>
