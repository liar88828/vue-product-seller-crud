<template>
  <CardInit class="card-normal">
    <CardHeadTitle
      title="Technical Specifications"
      :class="'text-xl sm:text-2xl font-bold'"
    >
      <!-- <p v-if="!refEdit" class="product-desc-p">{{ data.title }}</p>
      <textarea v-else v-model="data.title" class="textarea-edit"></textarea> -->
    </CardHeadTitle>

    <div v-if="!refEdit" class="grid md:grid-cols-2 gap-6">
      <div class="grid gap-2" v-for="item in data" :key="item.title">
        <h3 class="text-lg font-semibold">{{ item.title }}</h3>
        <p class="">{{ item.title }}</p>
      </div>
    </div>

    <!-- Multi Form -->
    <div v-if="refEdit" class="grid gap-4">
      <h1>Add A New Specification</h1>
      <div class="join">
        <input
          v-model="getText.title"
          placeholder="Add title"
          class="input input-bordered join-item w-full"
        />
        <button @click="onAdd" class="btn btn-primary join-item">
          <IconsPlus class="icons" />
        </button>
      </div>
      <textarea v-model="getText.text" class="textarea-edit"></textarea>

      <div
        class="grid gap-2 border p-2 rounded"
        v-for="(item, index) in multiple"
        :key="item.title"
      >
        <div class="flex justify-between">
          <h3 class="text-lg font-semibold">{{ item.title }}</h3>
          <button class="btn btn-error btn-sm btn-square btn-outline">
            <IconsTrash class="icons" @click="onDelete(index)" />
          </button>
        </div>
        <p>{{ item.text }}</p>
      </div>
    </div>

    <!-- Button -->
    <button v-if="!refEdit" class="btn btn-info" @click="refEdit = !refEdit">
      Edit
    </button>
    <button v-else @click="onSave" class="btn btn-success">Save</button>
  </CardInit>
</template>

<script setup lang="ts">
import type { ProductItem } from "~/types/product/item"

const props = defineProps<{
  data: ProductItem["desc_tech"]
}>()

const { getText, refEdit, multiple, onAdd, onDelete, onSave } = useProductTech(
  props.data
)
</script>
